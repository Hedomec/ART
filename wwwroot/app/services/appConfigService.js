(function () {
    'use strict';

    angular.module('app').service('appConfigService', ['$q', '$timeout', '$http', fnService]);

    function fnService($q, $timeout, $http) {
        var currentConfig = {};
        return {
            get: function () {
                return $q(function (resolve, reject) {
                    resolve(currentConfig);
                })
            }
        };
    }
})();
