(function () {
    angular.module('app')
    .controller('homeController', ['identityService', '$scope', '$rootScope', '$timeout', function (identityService, $scope, $rootScope, $timeout) {
        
        $rootScope.title = "";        
        identityService.isAuthorize().then(function () { });

    }]);
})();
