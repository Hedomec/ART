(function () {
    'use strict';
    angular.module('app').factory('identityInterceptorService', ['$q', '$injector', fnFactory]);

    function fnFactory($q, $injector) {

        var authInterceptorServiceFactory = {};

        /*var _request = function (config) {

            config.headers = config.headers || {};

            var authData = localStorageService.get('authorizationData');
            if (authData) {
                config.headers.Authorization = 'Bearer ' + authData.token;
            }

            return config;
        }*/

        var _responseError = function (rejection) {
            if (rejection.status === 401) {
                //var identityService = $injector.get('identityService');
                //var authData = localStorageService.get('authorizationData');
                /*if (identityService.isAuthenticated) {
                    $state.go('main.error');
                    return $q.reject(rejection);
                }*/
                var identityService = $injector.get('identityService');
                identityService.redirect();
            }
            if (rejection.status === 404) {
                var identityService = $injector.get('identityService');
                identityService.redirect();
            }
            return $q.reject(rejection);
        }

        //authInterceptorServiceFactory.request = _request;
        authInterceptorServiceFactory.responseError = _responseError;

        return authInterceptorServiceFactory;
    }
})();