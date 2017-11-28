(function () {
    angular.module('app').controller('loginController', ['identityService', '$scope', '$state', '$cookies', function (identityService, $scope, $state, $cookies) {
        $scope.message = "";

        $scope.user = {
        }

        $scope.login = function () {
            identityService.login($scope.user).then(function () {
                $state.go('main.home');
            }, function (data) {
                $scope.message = data.error;
            });
        }

        $scope.appInfo = {};
        identityService.getAppInfo().then(function (data) {
            $scope.appInfo = data;
        });
    }]);
})();
