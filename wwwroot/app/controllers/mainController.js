(function () {
    angular.module('app')
    .controller('mainController', ['$mdSidenav', '$mdBottomSheet', '$log', '$q', '$state', '$mdToast', '$scope', '$rootScope', 'identityService',
    function ($mdSidenav, $mdBottomSheet, $log, $q, $state, $mdToast, $scope, $rootScope, identityService) {

        $scope.authData = identityService.authentication;
        $scope.logout = function () {
            identityService.logOut().then(function () {
                $state.go('login');
            }, function () {
                $state.go('login');
            });
        }

        $scope.appInfo = {};
        identityService.getAppInfo().then(function (data) {
            $scope.appInfo = data;
        });
        identityService.fillAuthData().then(function () {
            $scope.menuAdministration = [
                { name: "Administrar Usuarios", sref: ".useradmin", icon: "supervisor_account", access: $scope.access("Administration") },
                { name: "Reporte de actividades", sref: ".activity", icon: "today", access: $scope.access("Administration") }
            ];
        });

        $scope.access = function (claim) {
            return identityService.haveAccess('All') || identityService.haveAccess(claim);
        }

        /*$scope.thisYear = new Date().getFullYear();
        $scope.appName = "Shipping Instructions Para Embarques Manuales (SIPEM)";
        $scope.companyName = "CELISTICS";*/
        $scope.menu = {
            sections: [
                //{ name: "Dashboard", sref: "elive.dashboard", type: "link" },
                //{ name: "Proveedores", sref: ".provider", type: "link" },
                //{ name: "Marcas", sref: ".brand", type: "link" },
                //{ name: "Aerolíneas", sref: ".airline", type: "link" },
                //{ name: "Puertos", sref: ".portsLocation", type: "link" },
                { name: "Administrar Usuarios", sref: ".useradmin", type: "link", access:"Administration" },
                { name: "Reporte de actividades", sref: ".activity", type: "link", access:"Administration" },
                /*{
                    name: "Menu", type: "toggle", pages: [
                        { name: "Home", sref: ".dashboard", type: "link" },
                        { name: "Table", sref: ".table", type: "link" }
                    ]
                }*/
            ]
        };

        $scope.openMenu = function () {
            $mdSidenav('left').toggle();
        };

        $scope.login = {
            isLoged: true,
            logout: function () {

            }
        };

        $rootScope.title = "";

        //$rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
        //    $scope.title = '';
        //    if (toState.data && toState.data.title)
        //        $scope.title = toState.data.title;
        //});

        this.selectSection = function (section) {
            $scope.menu.currentSection = section;
        };
        $scope.isSectionSelected = this.isOpen = function (section) {
            return $scope.menu.openedSection == section;
        };
        this.isSelected = function (section) {
            return $scope.menu.currentSection == section;
        };
        this.toggleOpen = function (section) {
            $scope.menu.openedSection = $scope.menu.openedSection === section ? null : section
        };
        this.autoFocusContent = !1;

    }]);
})();
