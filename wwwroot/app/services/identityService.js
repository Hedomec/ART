(function () {
    'use strict';
    angular.module('app').factory('identityService', ['$http', '$q', '$state', 'localStorageService', function ($http, $q, $state, localStorageService) {

        var serviceBase = './api/Identity/';
        var authServiceFactory = {};

        var _authentication = {
            isAuthenticated: false,
            name: "",
            claims: []
        };

        var _login = function (loginData) {
            var deferred = $q.defer();

            $http.post(serviceBase + 'Login', loginData).then(function (loginResponse) {
                if (loginResponse.data.error) {
                    deferred.reject(loginResponse.data)
                    return;
                }
                $http.get(serviceBase + 'GetUserInfo').then(function (response) {
                    if (response.data.error) {
                        deferred.reject(response.data)
                        return;
                    }
                    if (response.data.isAuthenticated) {
                        localStorageService.set('authorizationData', response.data);
                        _authentication.isAuthenticated = true;
                        _authentication.name = response.data.name;
                        _authentication.claims = response.data.claims;
                        deferred.resolve(_authentication);
                    }
                    else {
                        _logOut();
                        deferred.reject({ error: "Usuario no autentificado." });
                    }
                }, function (err, status) {
                    _logOut();
                    deferred.reject(err);
                });

            }, function (err, status) {
                _logOut();
                deferred.reject(err);
            });

            return deferred.promise;
        }

        var _logOut = function () {
            return $q(function (resolve, reject) {
                if (_authentication.isAuthenticated) {
                    $http.post(serviceBase + 'LogOff').then(function () {
                        localStorageService.remove('authorizationData');
                        _authentication.isAuthenticated = false;
                        _authentication.name = "";
                        _authentication.claims = [];
                        resolve();
                    }, function (response) {
                        reject(response);
                    });
                }
                else {
                    localStorageService.remove('authorizationData');
                    _authentication.isAuthenticated = false;
                    _authentication.name = "";
                    _authentication.claims = [];
                    resolve();
                }
            })
        };

        var _fillAuthData = function () {

            /*var authData = localStorageService.get('authorizationData');
            if (authData) {
                _authentication.isAuthenticated = true;
                _authentication.name = authData.name;
                _authentication.claims = authData.claims;
            }*/

            var deferred = $q.defer();
            $http.get(serviceBase + 'GetUserInfo').then(function (response) {
                if (response.data.error) {
                    deferred.reject(response.data)
                    return;
                }
                if (response.data.isAuthenticated) {
                    localStorageService.set('authorizationData', response.data);
                    _authentication.isAuthenticated = true;
                    _authentication.name = response.data.name;
                    _authentication.claims = response.data.claims;
                    deferred.resolve(_authentication);
                }
                else {
                    _logOut();
                    deferred.reject({ error: "Usuario no autentificado." });
                }
            }, function (err, status) {
                _logOut();
                deferred.reject(err);
            });
            return deferred.promise;
        }

        var _redirect = function () {
            if (_authentication.isAuthenticated) {
                $state.go('main.error');
            }
            else {
                _logOut();
                $state.go('login');
            }
        }

        var _isAuthorize = function (claim) {
            if(claim) {
                return $q(function(resolve, reject){
                    _haveAccess(claim) ? resolve() : reject();
                });
            }
            return $q(function (resolve, reject) {
                if (_authentication.isAuthenticated) {
                    resolve();
                }
                else {
                    _fillAuthData().then(function (data) {
                        resolve(data);
                    }, function (error) {
                        $state.go('login');
                        reject(error);
                    });
                }
            })
        };

        var _getAppInfo = function () {
            return $q(function (resolve, reject) {
                /*resolve({
                    thisYear: new Date().getFullYear(),
                    appName: "Shipping Instructions Para Embarques Manuales (SIPEM)",
                    companyName: "CELISTICS",
                    appVersion: "1.5",
                    appEnvironment: "DEV"
                });*/
                $http.get(serviceBase + 'GetAppInfo').then(function (response) {
                    if (response.data.error) {
                        reject(response.data)
                        return;
                    }
                    resolve(response.data)
                }, function (err, status) {
                    reject(err);
                });
            })
        };

        var _haveAccess = function (claimValue) {
            if (_authentication.claims && _authentication.claims.length > 0) {
                return _authentication.claims.indexOf(claimValue) != -1;
            }
            return false;
        }
        

        authServiceFactory.login = _login;
        authServiceFactory.logOut = _logOut;
        authServiceFactory.fillAuthData = _fillAuthData;
        authServiceFactory.authentication = _authentication;
        authServiceFactory.redirect = _redirect;
        authServiceFactory.isAuthorize = _isAuthorize;
        authServiceFactory.getAppInfo = _getAppInfo;
        authServiceFactory.haveAccess = _haveAccess;

        return authServiceFactory;
    }]);
})();