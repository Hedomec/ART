angular.module('app-templates', []).run(['$templateCache', function($templateCache) {$templateCache.put('app/views/error.html','<md-content layout="column" role="main" flex layout-align="center center"><div md-whiteframe="5" layout-padding><span layout="row" md-colors="{color: \'warn-900\'}" layout-align="center center">Acceso no autorizado.</span></div></md-content>');
$templateCache.put('app/views/home.html','<div layout-margin layout-padding></div>');
$templateCache.put('app/views/internship.html','<div layout="column" layout-align="center center"><md-card flex="100" layout="row"><div style="padding: 10px 10px 10px 10px"><md-icon>assignment</md-icon><strong layout-align="center center">Pasantias</strong></div></md-card><md-crud options="crudOptions"></md-crud></div><script type="text/ng-template" id="templateDocs.html"><!-- Aqui ira el html para cargar los documentos -->\r\n    <md-content>       \r\n        <md-toolbar class="md-primary">\r\n            <div class="md-toolbar-tools">\r\n                <span>Documentos del expediente</span>\r\n            </div>\r\n        </md-toolbar>        \r\n        <md-list>\r\n            <md-list-item class="md-2-line"  ng-repeat="file in item.Archivos">\r\n                <md-icon>insert_drive_file</md-icon>\r\n                <a class="md-list-item-text" href="/ART/api/download/{{file.File_Md5}}">{{file.File_Name}}</a>\r\n            </md-list-item>\r\n        </md-list>\r\n    </md-content></script><script type="text/ng-template" id="templateButton.html"><md-button class="md-raised md-primary" ngf-select="options.onUpload($files, item)" multiple>\r\n        <md-icon>file_upload</md-icon>Subir Archivos\r\n    </md-button></script>');
$templateCache.put('app/views/login.html','<md-content role="main" layout-align="none center" layout="column" flex="100"><div flex></div><md-card layout-padding style="max-width:268px" flex="none"><div layout="column" layout-align="center center"><img src="wwwroot/images/logo.png"><!--<img src="/images/e-liveConnections.png" style="width:230px;margin-top:5px" />--></div><div layout="row"></div><div><form ng-submit="login()" name="loginForm"><md-input-container class="md-icon-float md-block"><label>Usuario</label><md-icon>account_circle</md-icon><input ng-model="user.UserName" type="text" ng-required="true" autofocus></md-input-container><md-input-container md-no-float class="md-icon-float md-block"><label>Contrase\xF1a</label><md-icon>lock</md-icon><input ng-model="user.Password" type="password" ng-required="true"></md-input-container><span layout="row" md-colors="{color: \'warn-900\'}" ng-if="message" layout-align="center center">{{message}}</span><div layout="row" layout-align="center center"><md-button class="md-raised md-primary" type="submit">Iniciar sesion</md-button></div></form></div></md-card><div flex></div><div layout="row" flex="noshrink" layout-align="center center" style="width:100%;height:50px"><div id="license-footer"><span>{{appInfo.companyName}} </span><span>&copy;{{appInfo.devYear}}</span> <span ng-if="appInfo.thisYear != appInfo.devYear">&#8211;{{appInfo.thisYear}}</span> <span>/ {{appInfo.appName}} Ver. {{appInfo.appVersion}} {{appInfo.appEnvironment}}</span></div></div></md-content>');
$templateCache.put('app/views/main.html','<!--<md-sidenav class="site-sidenav md-sidenav-left md-whiteframe-z2"\r\n            md-component-id="left" hide-print\r\n            md-is-locked-open="$mdMedia(\'gt-sm\')">\r\n\r\n    <header class="nav-header md-primary"  md-colors="{backgroundColor: \'grey-50\'}">\r\n        <a ng-href="/" class="docs-logo">\r\n            <img src="/images/logo.png" />\r\n        </a>\r\n        <img src="/images/e-liveConnections.png" style="width:100%;margin-top:5px"/>\r\n    </header>\r\n\r\n    <md-content flex role="navigation" md-colors="{backgroundColor: \'primary-800\'}">\r\n        <ul class="docs-menu">\r\n            <li ng-repeat="section in menu.sections" class="parent-list-item {{section.className || \'\'}}" ng-class="{\'parentActive\' : isSectionSelected(section)}">\r\n                <h2 class="menu-heading md-subhead" ng-if="section.type === \'heading\'" id="heading_{{ section.name | nospace }}">\r\n                    {{section.name}}\r\n                </h2>\r\n                <menu-link section="section" ng-if="section.type === \'link\' && !section.hidden"></menu-link>\r\n\r\n                <menu-toggle section="section" ng-if="section.type === \'toggle\' && !section.hidden"></menu-toggle>\r\n\r\n                <ul ng-if="section.children" class="menu-nested-list">\r\n                    <li ng-repeat="child in section.children" ng-class="{\'childActive\' : isSectionSelected(child)}">\r\n                        <menu-link section="child" ng-if="child.type === \'link\'"></menu-link>\r\n\r\n                        <menu-toggle section="child" ng-if="child.type === \'toggle\'"></menu-toggle>\r\n                    </li>\r\n                </ul>\r\n            </li>\r\n        </ul>\r\n    </md-content>\r\n</md-sidenav>--><div layout="column" role="main" flex><div style="background-color:white"><md-toolbar class="md-whiteframe-glow-z1" md-colors="{background: \'default-primary-50-0\'}" style="height: 68px" flex><div class="md-toolbar-tools" tabindex="-1" flex><a ng-href="/ART/#/" class="docs-logo"><img src="./wwwroot/images/logo.png" style="margin-top: 9px; height: 75px"> </a><span flex></span><md-button class="md-primary" aria-label="Servicio Comunitario" ui-sref=".servicioComunitario" ui-sref-opts="{reload: true, notify: true}" ng-if="access(\'ServicioComunitario\')"><md-icon>assignment</md-icon>Servicio Comunitario</md-button><md-button class="md-primary" aria-label="Pasantias" ui-sref=".pasantias" ui-sref-opts="{reload: true, notify: true}" ng-if="access(\'Pasantias\')"><md-icon>assignment</md-icon>Pasantias</md-button><md-button class="md-primary" aria-label="Tesis y Casos clinicos" ui-sref=".tesis" ui-sref-opts="{reload: true, notify: true}" ng-if="access(\'Tesis\')"><md-icon>assignment</md-icon>Tesis y Casos clinicos</md-button><md-menu ng-if="access(\'Administration\')"><md-button aria-label="Administration" class="md-icon-button md-primary" ng-click="$mdMenu.open($event)"><md-icon>settings</md-icon><md-tooltip md-autohide>Administracion</md-tooltip></md-button><md-menu-content width="4"><md-menu-item ng-repeat="section in menuAdministration" ng-if="section.access"><md-button ui-sref="{{section.sref}}" ui-sref-opts="{reload: true, notify: true}" class="md-accent"><md-icon>{{section.icon || \'settings\'}}</md-icon>{{section.name}}</md-button></md-menu-item><!--<md-menu-divider></md-menu-divider>--></md-menu-content></md-menu><div ng-if="authData.isAuthenticated" style="font-size: 15px" md-colors="{color: \'default-primary\'}">{{authData.name}}</div><md-button class="md-icon-button md-primary" aria-label="Salir" ng-if="authData.isAuthenticated" ng-click="logout()"><md-tooltip md-autohide>Desconectarse</md-tooltip><md-icon>exit_to_app</md-icon></md-button></div></md-toolbar></div><md-content md-scroll-y layout="column" flex><div ui-view></div><div flex></div><div layout="row" flex="none" layout-align="center center" style="width:100%"><div id="license-footer" flex><span>{{appInfo.companyName}} </span><span>&copy;{{appInfo.devYear}}</span> <span ng-if="appInfo.thisYear != appInfo.devYear">&#8211;{{appInfo.thisYear}}</span> <span>/ {{appInfo.appName}} Ver. {{appInfo.appVersion}} {{appInfo.appEnvironment}}</span></div></div></md-content></div>');
$templateCache.put('app/views/roleAdmin.html','<div layout-padding layout="column" layout-align="start center"><div><div layout="row" layout-align="start center"><md-icon layout-margin>verified_user</md-icon><strong flex>Manage user profiles</strong></div><md-crud options="crudOptions"></md-crud></div></div><script type="text/ng-template" id="templateClaimTypeTree"><div ng-click="claimType.AccessLevelTypes.length == 0 && options.filterClaim(claimType)" \r\n         layout-padding layout="row" layout-align="start center" style="cursor:pointer"\r\n         class="md-selectable" md-ink-ripple="true" ng-class="{ \'md-selected\': options.claimTypeSelected == claimType }">\r\n        <md-icon style="font-size: 20px;padding-right: 0px;padding-top: 1px;" flex="none">{{claimType.AccessLevelTypes.length > 0 ? \'keyboard_arrow_down\' : \'keyboard_arrow_right\'}}</md-icon>\r\n        <span flex>{{ claimType.Description }}</span>\r\n        <span ng-if="claimType.AccessLevelTypes.length == 0">({{ options.countClaims(claimType, item) }})</span>\r\n    </div>\r\n    <div ng-repeat="claimType in claimType.AccessLevelTypes" ng-include="\'templateClaimTypeTree\'" style="margin-left:10px"></div></script><script type="text/ng-template" id="templateRoleClaim.html"><md-card layout="row">\r\n        <div flex="40" style="background-color: rgba(205, 205, 205, 0.35);font-size: 13px;">\r\n            <div ng-repeat="claimType in options.claimTypes" ng-include="\'templateClaimTypeTree\'"></div>\r\n        </div>\r\n        <div flex>\r\n            <div layout="row" style="background-color: rgba(205, 205, 205, 0.15);padding:10px" layout-align="center center">\r\n                <span>{{ options.claimTypeSelected.Description }}</span>\r\n                <div flex></div>\r\n                <div layout="row">\r\n                    <md-button class="md-icon-button md-primary" ng-disabled="true">\r\n                        <md-icon>&#xE8B6;</md-icon>\r\n                    </md-button>\r\n                    <md-autocomplete md-search-text="options.searchText" type="search" placeholder="" md-items="item in []"></md-autocomplete>\r\n                </div>\r\n            </div>\r\n            <md-virtual-repeat-container id="vertical-container" ng-if="options.claimTypeSelected" style="height:400px">\r\n                <div md-virtual-repeat="claim in options.claims | filter:options.claimFilter | filter:options.searchText" class="repeated-item" layout="row">\r\n                    <md-checkbox ng-checked="options.isCheckedClaim(claim, item) != -1 || (options.claimTypeSelected.countSelected == \'All\' && (claim.Value != \'All\' || claim.Value != \'0\'))"\r\n                                 ng-disabled="isLoading || (options.claimTypeSelected.countSelected == \'All\' && claim.Value != \'All\' && claim.Value != \'0\')"\r\n                                 ng-click="options.toggleClaim(claim, item)" aria-label="claim.Description" style="margin:10px">\r\n                        {{ claim.Description }}\r\n                    </md-checkbox> \r\n                </div>\r\n            </md-virtual-repeat-container>\r\n        </div>\r\n    </md-card></script>');
$templateCache.put('app/views/serviceCommunitary.html','<div layout="column" layout-align="center center"><md-card flex="100" layout="row"><div style="padding: 10px 10px 10px 10px"><md-icon>assignment</md-icon><strong layout-align="center center">Servicio comunitario</strong></div></md-card><md-crud options="crudOptions"></md-crud></div><script type="text/ng-template" id="templateDocs.html"><!-- Aqui ira el html para cargar los documentos -->\r\n    <md-content>       \r\n        <md-toolbar class="md-primary">\r\n            <div class="md-toolbar-tools">\r\n                <span>Documentos del expediente</span>\r\n            </div>\r\n        </md-toolbar>        \r\n        <md-list>\r\n            <md-list-item class="md-2-line"  ng-repeat="file in item.Archivos">\r\n                <md-icon>insert_drive_file</md-icon>\r\n                <a class="md-list-item-text" href="/ART/api/download/{{file.File_Md5}}">{{file.File_Name}}</a>\r\n            </md-list-item>\r\n        </md-list>\r\n    </md-content></script><script type="text/ng-template" id="templateButton.html"><md-button class="md-raised md-primary" ngf-select="options.onUpload($files, item)" multiple>\r\n        <md-icon>file_upload</md-icon>Subir Archivos\r\n    </md-button></script>');
$templateCache.put('app/views/systemactivity.html','<div layout-padding layout="column" layout-align="start center"><div><div layout="row" layout-align="start center"><md-icon layout-margin>verified_user</md-icon><strong flex>Reporte de actividades</strong></div><md-crud options="crudOptions"></md-crud></div></div>');
$templateCache.put('app/views/thesis.html','<div layout="column" layout-align="center center"><md-card flex="100" layout="row"><div style="padding: 10px 10px 10px 10px"><md-icon>assignment</md-icon><strong layout-align="center center">Trabajo especiales de grado</strong></div></md-card><md-crud options="crudOptions"></md-crud></div><script type="text/ng-template" id="templateDocs.html"><!-- Aqui ira el html para cargar los documentos -->\r\n    <md-content>       \r\n        <md-toolbar class="md-primary">\r\n            <div class="md-toolbar-tools">\r\n                <span>Documentos del expediente</span>\r\n            </div>\r\n        </md-toolbar>        \r\n        <md-list>\r\n            <md-list-item class="md-2-line"  ng-repeat="file in item.Archivos">\r\n                <md-icon>insert_drive_file</md-icon>\r\n                <a class="md-list-item-text" href="/ART/api/download/{{file.File_Md5}}">{{file.File_Name}}</a>\r\n            </md-list-item>\r\n        </md-list>\r\n    </md-content></script><script type="text/ng-template" id="templateButton.html"><md-button class="md-raised md-primary" ngf-select="options.onUpload($files, item)" multiple>\r\n        <md-icon>file_upload</md-icon>Subir Archivos\r\n    </md-button></script>');
$templateCache.put('app/views/userAdmin.html','<div layout-padding layout="column" layout-align="start center"><div><div layout="row" layout-align="start center"><md-icon layout-margin>supervisor_account</md-icon><strong flex>Administrar Usuarios</strong></div><md-crud options="crudOptions"></md-crud></div></div>');}]);
window.deferredBootstrapper.bootstrap({
    element: window.document.body,
    module: 'app',
    /*resolve: {
        STARTUP_CONFIG: ['$http', function ($http) {
            return $http.get('/api/Config');
        }]
    }*/
});

(function () {
    'use strict';
    var app = angular.module('app', ['ngAnimate', 'ngMessages', 'ngCookies', 'ngSanitize', 'ui.router',
        'ngMaterial', 'md.data.table', 'LocalStorageModule', 'angular-loading-bar', 'lfNgMdFileInput', 'angularCSS',
        'app-templates', 'mdCrudModule', 'ng-scroll-bar','ngFileUpload']);

    //app.run(['$http', '$interval', function ($http, $interval) {
    //    $interval(function () {
    //        $http.get('/api/Config/Ping', { ignoreLoadingBar: true }).then(function (response) { });
    //    }, 10000);
    //}]);

    app.config(['$httpProvider', function ($httpProvider) {
        //initialize get if not there
        if (!$httpProvider.defaults.headers.get) {
            $httpProvider.defaults.headers.get = {};
        }

        // Answer edited to include suggestions from comments
        // because previous version of code introduced browser-related errors

        //disable IE ajax request caching
        $httpProvider.defaults.headers.get['If-Modified-Since'] = 'Mon, 26 Jul 1997 05:00:00 GMT';
        // extra
        $httpProvider.defaults.headers.get['Cache-Control'] = 'no-cache';
        $httpProvider.defaults.headers.get['Pragma'] = 'no-cache';
    }]);

    app.run(['mdCrudService', '$locale', function (mdCrudService, $locale) {
        $locale.DATETIME_FORMATS.shortDate = 'MM/dd/yyyy';
        $locale.DATETIME_FORMATS.short = 'MM/dd/yyyy HH:mm';
        mdCrudService.setDefaultOptions({
            rootApi: './api',
            methodDelete: 'PATCH',
            urlDelete: '{{rootApi}}/{{entity}}/DeleteItem/{{id}}',
            functionData: function (response, resolve, reject) {
                if (response.data.error)
                    reject(response.data);
                else
                    resolve(response);
            }
        });
        mdCrudService.setDefaultText({
            editTitle: 'Editar',
            detailTitle: 'Detalle',
            createTitle: 'Crear',
            deleteError: 'Error al intentar eliminar la fila',
            deleteErrorTitle: 'Error al eliminar',
            deleteConfirmTitle: 'Eliminar',
            deleteConfirmMessage: '�Esta usted seguro de eliminar la fila?',
            tablePaginationPage: 'Pagina:',
            tablePaginationRowsPerPage: 'Filas por pagina:',
            tablePaginationOf: 'de',
            createOption: 'Crear',
            btnConfirmOk: 'Si',
            btnConfirmCancel: 'No',
            btnAlertOk: 'Aceptar',
            generalErrorTitle: 'Error',
            messageRequired: 'Requerido',
            messageMinlength: 'Longitud m�nima',
            messageMaxlength: 'Longitud m�xima',
            messagePattern: 'Formato de entrada no valido.',
            messageMin: 'Valor m�nimo',
            messageMax: 'valor m�ximo',
            messageMimetype: 'Tipo de archivo no valido',
            messageValid: 'Formato de entrada no valido.',
            messageMindate: 'Fecha m�nima',
            messageMaxdate: 'Fecha m�xima',
            formCancel: 'Cancelar',
            formSubmit: 'Guardar',
        });
    }]);
})();

(function () {
    'use strict';

    angular.module('app').config(config);

    config.$inject = ['$stateProvider', '$urlRouterProvider', '$mdThemingProvider', '$mdIconProvider', '$httpProvider',
        'cfpLoadingBarProvider', '$mdDateLocaleProvider'];

    function config($stateProvider, $urlRouterProvider, $mdThemingProvider, $mdIconProvider, $httpProvider, cfpLoadingBarProvider, $mdDateLocaleProvider) {

        cfpLoadingBarProvider.spinnerTemplate = '<div id="loading-bar-spinner"><div class="spinner-icon"></div></div><md-backdrop class="md-dialog-backdrop md-opaque ng-scope" style="position: fixed;z-index:1000" aria-hidden="true"></md-backdrop>';

        var cssBootstrap = ['lib/kendoui/kendo.common.min.css', 'lib/kendoui/kendo.suredestiny.min.css', 'css/bootstrap.min.css', 'css/bootstrap-theme.min.css', 'css/sb-admin-2.css'];

        $stateProvider
        .state('main', {
            url: '',
            templateUrl: 'app/views/main.html',
            controller: 'mainController',
            abstract: true
        })
        .state('main.home', {
            url: '/',
            templateUrl: 'app/views/home.html',
            controller: 'homeController'
        })
        .state('main.error', {
            url: '/error',
            templateUrl: 'app/views/error.html'
        })
        .state('login', {
            url: '/login',
            templateUrl: 'app/views/login.html',
            controller: 'loginController',
            data: {
                title: 'Login'
            }
        })
        .state('main.useradmin', {
            url: '/useradmin',
            templateUrl: 'app/views/userAdmin.html',
            controller: 'useradminController',
            resolve: {
                authorize: ['identityService', function (identityService) {
                    return identityService.isAuthorize('Administration');
                }]
            }
        })
        .state('main.activity', {
            url: '/systemactivity',
            templateUrl: 'app/views/systemactivity.html',
            controller: 'systemactivityController',
            resolve: {
                authorize: ['identityService', function (identityService) {
                    return identityService.isAuthorize('Administration');
                }]
            }
        })
        .state('main.roleAdmin', {
            url: '/roleAdmin',
            templateUrl: 'app/views/roleAdmin.html',
            controller: 'roleAdminController',
            resolve: {
                authorize: ['identityService', function (identityService) {
                    return identityService.isAuthorize();
                }]
            }
        })
        .state('main.servicioComunitario', {
            url: '/serviceCommunitary',
            templateUrl: 'app/views/serviceCommunitary.html',
            controller: 'serviceCommunitaryController',
            resolve: {
                authorize: ['identityService', function (identityService) {
                    return identityService.isAuthorize('ServicioComunitario');
                }]
            }
        })
        .state('main.pasantias', {
            url: '/internship',
            templateUrl: 'app/views/internship.html',
            controller: 'internshipController',
            resolve: {
                authorize: ['identityService', function (identityService) {
                    return identityService.isAuthorize('Pasantias');
                }]
            }
        })
        .state('main.tesis', {
            url: '/thesis',
            templateUrl: 'app/views/thesis.html',
            controller: 'thesisController',
            resolve: {
                authorize: ['identityService', function (identityService) {
                    return identityService.isAuthorize('Tesis');
                }]
            }
        });

        $urlRouterProvider.otherwise('/');

        $httpProvider.interceptors.push('identityInterceptorService');

        $mdDateLocaleProvider.formatDate = function (date) {
            return moment(date).format('MM/DD/YY');
        };

        $mdThemingProvider
        .theme('default')
            .primaryPalette('blue', {
                'default': '800'
            })
            .accentPalette('orange', {
                'default': '500'
            })
            .warnPalette('red');
    }
})();
(function () {
    angular.module('app')
    .controller('homeController', ['identityService', '$scope', '$rootScope', '$timeout', function (identityService, $scope, $rootScope, $timeout) {
        
        $rootScope.title = "";        
        identityService.isAuthorize().then(function () { });

    }]);
})();

(function(){
    angular.module('app')
    .controller('internshipController', ['$scope', '$rootScope', '$mdDialog', 'mdCrudService','Upload',
    function ($scope, $rootScope, $mdDialog, mdCrudService,Upload){
        $rootScope.title = "Informes de Servicio Comunitario";

        $scope.crudOptions ={
            entity: 'internships',
            id: 'Id_Report',
            noDelete: true,
            noDetailButtons:true,
            fields: [
                {
                    name: 'Report_Name',
                    label: 'Titulo de informe',
                    type: 'text',
                    required: true
                },
                {
                    name: 'isApproved',
                    label: 'Esta aprobado?',
                    type: 'select',
                    value: 'Id',
                    text: 'Text',
                    data: function(){
                        return $scope.crudOptions.Aprobado;
                    },
                    required: true
                },
                {
                    name: 'Students',
                    label: 'Estudiantes',
                    type: 'text',
                    required: true
                },
                {
                    name: 'Id_Career',
                    label: 'Carrera',
                    type: 'select',
                    value:'Id_Career',
                    text:'Name_Career',
                    data: function(){
                        return $scope.crudOptions.Carrera;
                    },
                    required: true
                },
                {
                    name: 'Observations',
                    label: 'Observaciones',
                    type: 'textarea',
                    columnHidden: true,
                    required: true
                },
                {
                    templateUrl: 'templateDocs.html',
                    detailHidden: true                
                },
                {
                    templateUrl: 'templateButton.html',
                    detailHidden: true
                }
            ],
            form:{
                onSubmit: function(){

                },
                onEdit: function(item,options){
                    mdCrudService.get({entity: "getfile/" + item.Id_Report}).then(function(response){
                        item.Archivos = response.data;
                    });
                }
            },
            onDownload: function(file){
                mdCrudService.get({ entity: "download/" + file});
            },
            onUpload: function(files,item){
                if(!item.Archivos){
                    item.Archivos=[];
                }
                var aal = item.Archivos.length;
                Upload.base64DataUrl(files).then(function (base64s) {
                    for (var i in base64s) {
                        item.Archivos[parseInt(i) + aal] = {
                            File_Name: files[i].name,
                            Base64: base64s[i]
                        };
                    }
                });
            },
            Carrera : null,
            Aprobado : [{"Id":"0","Text":"No"},{"Id":"1","Text":"Si"}]
        };

        mdCrudService.get({ entity: "systemactivity/getcareer" }).then(function (response) {
            $scope.crudOptions.Carrera = response.data;
        });
    }]);
})();
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

(function () {
    angular.module('app')
    .controller('roleAdminController', ['$scope', '$rootScope', 'identityService', 'mdCrudService',
    function ($scope, $rootScope, identityService, mdCrudService) {
        
        $rootScope.title = "Manage user profiles";

        var options = $scope.crudOptions = {
            entity: 'Role',
            id: 'Id',
            editOnSelect: true,
            formType: 'window',
            windowFlex: 70,
            fields: [
                {
                    name: 'Name',
                    label: 'Name',
                    type: 'text',
                    required: true,
                    readonly: false,
                    flex: 50
                },
                {
                    name: 'RoleTypeId',
                    label: 'Role type',
                    type: 'select',
                    value: 'RoleTypeId',
                    text: 'Description',
                    required: true,
                    entity: 'Role/GetRoleTypes',
                    flex: 50
                },
                {
                    templateUrl: "templateRoleClaim.html",
                    columnHiden: true
                },
                {
                    name: 'CreatedBy',
                    label: 'Created by',
                    createHiden: true,
                    detailHiden: true,
                    editHiden: true
                }
            ],
            form: {
                onOpen: function (item) {
                    item.Claims = [];
                },
                onEdit: function (item) {
                    //for (var i in $scope.crudOptions.claims) {
                    //    var claim = $scope.crudOptions.claims[i];
                    //    claim.
                    //}
                }
            },
            deleteConfirmMessage: 'Are you sure you want to delete the user profile: {{Name}}.',
            isCheckedClaim: function (claim, row) {
                for (var i = 0; i < row.Claims.length; i++) {
                    if (claim.AccessLevelTypeId == row.Claims[i].AccessLevelTypeId && claim.Value == row.Claims[i].Value) {
                        return i;
                    }
                }
                return -1;
            },
            toggleClaim: function (claim, row) {
                var index = $scope.crudOptions.isCheckedClaim(claim, row);
                if (index > -1) {
                    row.Claims.splice(index, 1);
                }
                else {
                    if (claim.Value == "All" || claim.Value == "0") {
                        for (var i = row.Claims.length - 1; i >= 0; i--) {
                            if (claim.AccessLevelTypeId == row.Claims[i].AccessLevelTypeId)
                                row.Claims.splice(i, 1);
                        }
                    }
                    row.Claims.push({ AccessLevelTypeId: claim.AccessLevelTypeId, Value: claim.Value });
                }
                //claimTypeSelected.countSelected = $scope.crudOptions.countClaims(claimType, row)
            },
            filterClaim: function (claimType) {
                $scope.crudOptions.claimTypeSelected = claimType;
                options.searchText = '';
            },
            claimTypeFilter: function (actual, expected) {
                return (!actual.AccessLevelTypeParentId && !expected.AccessLevelTypeParentId) || actual.AccessLevelTypeParentId == expected.AccessLevelTypeParentId;
            },
            claimFilter: function (value, index, array) {
                return value.AccessLevelTypeId == $scope.crudOptions.claimTypeSelected.AccessLevelTypeId;
            },
            claimRootFilter: function (value, index, array) {
                return !value.AccessLevelTypeParentId;
            },
            claimTypeGetParent: function (claimType) {
                if (claimType.AccessLevelTypeParentId) {
                    for (var i in $scope.crudOptions.claimTypes) {
                        if ($scope.crudOptions.claimTypes[i].AccessLevelTypeId == claimType.AccessLevelTypeParentId)
                            return $scope.crudOptions.claimTypes[i];
                    }
                }
                return null;
            },
            claimTypeSelectdParents: function () {
                var result = [];
                var current = $scope.crudOptions.claimTypeSelected;
                while (current && current.AccessLevelTypeId) {
                    result.unshift(current);
                    current = $scope.crudOptions.claimTypeGetParent(current);
                }
                return result;
            },
            clainTypeContainChildren: function (claimType) {
                for (var i in $scope.crudOptions.claimTypes) {
                    var row = $scope.crudOptions.claimTypes[i];
                    if (row.AccessLevelTypeParentId == claimType.AccessLevelTypeId)
                        return true;
                }
                return false;
            },
            countClaims: function (claimType, row) {
                var count = 0;
                for (var i in row.Claims) {
                    if (claimType.AccessLevelTypeId == row.Claims[i].AccessLevelTypeId) {
                        if (row.Claims[i].Value == "All" || row.Claims[i].Value == "0") {
                            claimType.countSelected = "All";
                            return "All";
                        }
                        count++;
                    }
                }
                claimType.countSelected = count;
                return count;
            },
            claimTypeSelected: {},
            claimTypes: [],
            claims: []
        };

        mdCrudService.get({ entity: "Role/GetClaimTypes" }).then(function (response) {
            $scope.crudOptions.claimTypes = response.data;
        });

        mdCrudService.get({ entity: "Role/GetClaims" }).then(function (response) {
            $scope.crudOptions.claims = response.data;
        });

        //identityService.isAuthorize('Role/Administrar/Crear').then(function () {
        //    $scope.crudOptions.noCreate = false;
        //})

        //identityService.isAuthorize().then(function () {
        //        $scope.crudOptions.refresh();
        //});

    }]);
})();

(function(){
    angular.module('app')
    .controller('serviceCommunitaryController', ['$scope', '$rootScope', '$mdDialog', 'mdCrudService', 'Upload',
    function ($scope, $rootScope, $mdDialog, mdCrudService, Upload){
        $rootScope.title = "Informes de Servicio Comunitario";

        $scope.crudOptions ={
            entity: 'scommunitary',
            id: 'Id_Report',
            noDetailButtons:true,            
            noDelete: true,
            fields: [
                {
                    name: 'Report_Name',
                    label: 'Titulo de informe',
                    type: 'text',
                    required: true
                },
                {
                    name: 'isApproved',
                    label: 'Esta aprobado?',
                    type: 'select',
                    value: 'Id',
                    text: 'Text',
                    data: function(){
                        return $scope.crudOptions.Aprobado;
                    },
                    required: true
                },
                {
                    name: 'Students',
                    label: 'Estudiantes',
                    type: 'text',
                    required: true
                },
                {
                    name: 'Id_Career',
                    label: 'Carrera',
                    type: 'select',
                    value:'Id_Career',
                    text:'Name_Career',
                    data: function(){
                        return $scope.crudOptions.Carrera;
                    },
                    required: true
                },
                {
                    name: 'Observations',
                    label: 'Observaciones',
                    type: 'textarea',
                    columnHidden: true,
                    required: true
                },
                {
                    templateUrl: 'templateDocs.html',
                    detailHidden: true
                    
                },
                {
                    templateUrl: 'templateButton.html',
                    detailHidden: true
                }
            ],
            form:{
                onSubmit: function(){

                },
                onEdit: function(item,options){
                    mdCrudService.get({entity: "getfile/" + item.Id_Report}).then(function(response){
                        item.Archivos = response.data;
                    });
                }
            },
            onDownload: function(file){
                mdCrudService.get({ entity: "download/" + file});
            },
            onUpload: function(files,item){
                if(!item.Archivos){
                    item.Archivos=[];
                }
                var aal = item.Archivos.length;
                Upload.base64DataUrl(files).then(function (base64s) {
                    for (var i in base64s) {
                        item.Archivos[parseInt(i) + aal] = {
                            File_Name: files[i].name,
                            Base64: base64s[i]
                        };
                    }
                });
            },
            Carrera : null,
            Aprobado : [{"Id":"0","Text":"No"},{"Id":"1","Text":"Si"}]
        };

        mdCrudService.get({ entity: "systemactivity/getcareer" }).then(function (response) {
            $scope.crudOptions.Carrera = response.data;
        });
    }]);
})();
(function(){
    angular.module('app')
    .controller('systemactivityController', ['$scope', '$rootScope', '$mdDialog', 'mdCrudService',
    function ($scope, $rootScope, $mdDialog, mdCrudService){
        $rootScope.title = "Reporte de actividades";

        $scope.crudOptions ={
            entity: 'systemactivity',
            id: 'Id_User_Log',
            noEdit: true,
            noCreate: true,
            noDetail: true,
            noDelete: true,
            fields: [
                {
                    name: 'Id_User',
                    label: 'Usuario',
                    type: 'select',
                    value: 'Id_User',
                    text: 'User_Name',
                    data: function(){
                        return $scope.crudOptions.Usuarios;
                    }
                },
                {
                    name: 'Date_Time',
                    label: 'Fecha de la accion',
                    type: 'Date'
                },
                {
                    name: 'Event',
                    label: 'Evento'
                }
            ],
            Usuarios : null
        };

        mdCrudService.get({ entity: "user" }).then(function (response) {
            $scope.crudOptions.Usuarios = response.data;
        });
    }]);
})();
(function(){
    angular.module('app')
    .controller('thesisController', ['$scope', '$rootScope', '$mdDialog', 'mdCrudService','Upload',
    function ($scope, $rootScope, $mdDialog, mdCrudService,Upload){
        $rootScope.title = "Informes de Servicio Comunitario";

        $scope.crudOptions ={
            entity: 'thesis',
            id: 'Id_Report',
            noDelete: true,           
            noDetailButtons:true,            
            fields: [
                {
                    name: 'Report_Name',
                    label: 'Titulo de informe',
                    type: 'text',
                    required: true
                },
                {
                    name: 'isApproved',
                    label: 'Esta aprobado?',
                    type: 'select',
                    value: 'Id',
                    text: 'Text',
                    data: function(){
                        return $scope.crudOptions.Aprobado;
                    },
                    required: true
                },
                {
                    name: 'Students',
                    label: 'Estudiantes',
                    type: 'text',
                    required: true
                },
                {
                    name: 'Id_Career',
                    label: 'Carrera',
                    type: 'select',
                    value:'Id_Career',
                    text:'Name_Career',
                    data: function(){
                        return $scope.crudOptions.Carrera;
                    },
                    required: true
                },
                {
                    name: 'Observations',
                    label: 'Observaciones',
                    type: 'textarea',
                    columnHidden: true,
                    required: true
                },
                {
                    templateUrl: 'templateDocs.html',
                    detailHidden: true                
                },
                {
                    templateUrl: 'templateButton.html',
                    detailHidden: true
                }
            ],
            form:{
                onSubmit: function(){

                },
                onEdit: function(item,options){
                    mdCrudService.get({entity: "getfile/" + item.Id_Report}).then(function(response){
                        item.Archivos = response.data;
                    });
                }
            },
            onDownload: function(file){
                mdCrudService.get({ entity: "download/" + file});
            },
            onUpload: function(files,item){
                if(!item.Archivos){
                    item.Archivos=[];
                }
                var aal = item.Archivos.length;
                Upload.base64DataUrl(files).then(function (base64s) {
                    for (var i in base64s) {
                        item.Archivos[parseInt(i) + aal] = {
                            File_Name: files[i].name,
                            Base64: base64s[i]
                        };
                    }
                });
            },
            Carrera : null,
            Aprobado : [{"Id":"0","Text":"No"},{"Id":"1","Text":"Si"}]
        };

        mdCrudService.get({ entity: "systemactivity/getcareer" }).then(function (response) {
            $scope.crudOptions.Carrera = response.data;
        });
    }]);
})();
(function () {
    angular.module('app')
    .controller('useradminController', ['$scope', '$rootScope', '$mdDialog', '$state', 'mdCrudService',
    function ($scope, $rootScope, $mdDialog, $state, mdCrudService) {
        
        $rootScope.title = "Administrar Usuarios";

        $scope.crudOptions = {
            entity: "user",
            id: "Id_User",
            noDetailButtons:true,
            fields: [
                {
                    name: 'User_Name',
                    label: 'Nombre de Usuario',
                    type: 'text',
                    required: true
                },
                {
                    name: 'Id_Role',
                    label: 'Roles',
                    type: 'select',
                    value: 'Id_Role',
                    text: 'Name_Role',
                    data: function(){
                        return $scope.crudOptions.Roles;
                    },
                    required: true
                },
                {
                    name: 'First_Name',
                    label: 'Nombre',
                    type: 'text',
                    required: true
                },
                {
                    name: 'Last_Name',
                    label: 'Apellido',
                    type: 'text',
                    required: true
                },
                {
                    name: 'Date_Created',
                    label: 'Fecha de creacion',
                    type: 'date',
                    createHidden: true,
                    editHidden: true,
                    required: true
                },
                {
                    name: 'Password',
                    label: 'Contraseña',
                    type: 'text',
                    columnHidden: true,
                    detailHidden: true,
                    required: true
                }
            ],
            Roles: null
        };

        mdCrudService.get({ entity: "role" }).then(function (response) {
            $scope.crudOptions.Roles = response.data;
        });
    }]);
})();

(function () {
    angular.module('app')
    .directive("menuLink",function () {
        return {
            scope: {
                section: "="
            }
            ,
            template: '<md-button\n    ng-class="{\'active\' : isSelected()}"\n    ui-sref="{{section.sref}}" ui-sref-opts="{reload: true, notify: true}"  ng-click="focusSection()">\n  {{section | humanizeDoc}}\n  <span class="md-visually-hidden"\n    ng-if="isSelected()">\n    current page\n  </span>\n</md-button>\n',
            link: function (e, t) {
                var a = t.parent().controller();
                e.isSelected = function () {
                    return a.isSelected(e.section);
                }
                ,
                e.focusSection = function () {
                    a.selectSection(e.section);
                    a.autoFocusContent = !0;
                }
            }
        }
    })
    .directive("menuToggle", ["$timeout", "$mdUtil", function (e, t) {
        return {
            scope: {
                section: "="
            }
            ,
            template: '<md-button class="md-button-toggle"\n  ng-click="toggle()"\n  aria-controls="docs-menu-{{section.name | nospace}}"\n  aria-expanded="{{isOpen()}}">\n  <div flex layout="row">\n    {{section.name}}\n    <span flex></span>\n    <span aria-hidden="true" class="md-toggle-icon"\n    ng-class="{\'toggled\' : isOpen()}">\n      <md-icon>keyboard_arrow_down</md-icon>\n    </span>\n  </div>\n  <span class="md-visually-hidden">\n    Toggle {{isOpen()? \'expanded\' : \'collapsed\'}}\n  </span>\n</md-button>\n\n<ul id="docs-menu-{{section.name | nospace}}" class="menu-toggle-list">\n  <li ng-repeat="page in section.pages">\n    <menu-link section="page"></menu-link>\n  </li>\n</ul>\n',
            link: function (a, n) {
                var o = n.parent().controller();
                a.isOpen = function () {
                    return o.isOpen(a.section)
                }
                ,
                a.toggle = function () {
                    o.toggleOpen(a.section)
                }
                ,
                t.nextTick(function () {
                    a.$watch(function () {
                        return o.isOpen(a.section)
                    }
                    , function (a) {
                        t.nextTick(function () {
                            function o() {
                                var e;
                                return l.addClass("no-transition"), l.css("height", ""), e = l.prop("clientHeight"), l.css("height", 0), l.removeClass("no-transition"), e
                            }
                            var l = n.find("ul"), i = l[0].querySelector("a.active"), s = document.querySelector(".docs-menu").parentNode, r = a ? o() : 0;
                            e(function () {
                                l.css({
                                    height: r + "px"
                                }
                                ), a && i && i.offsetParent && 0 === l[0].scrollTop && e(function () {
                                    var e = i.scrollHeight, a = i.offsetTop, n = i.offsetParent.offsetTop, o = 2 * e, l = a + n - o;
                                    t.animateScrollTo(s, l)
                                }
                                , 350, !1)
                            }
                            , 0, !1)
                        }
                        , !1)
                    }
                    )
                }
                );
                var l = n[0].parentNode.parentNode.parentNode;
                if (l.classList.contains("parent-list-item")) {
                    var i = l.querySelector("h2");
                    n[0].firstChild.setAttribute("aria-describedby", i.id)
                }
            }
        }
    }])
    .directive("compareTo", function () {
        return {
            require: "ngModel",
            scope: {
                otherModelValue: "=compareTo"
            },
            link: function (scope, element, attributes, ngModel) {

                ngModel.$validators.compareTo = function (modelValue) {
                    return modelValue == scope.otherModelValue;
                };

                scope.$watch("otherModelValue", function () {
                    ngModel.$validate();
                });
            }
        };
    })
    .directive('fileModel', ['$parse', function ($parse) {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                var model = $parse(attrs.fileModel);
                var modelSetter = model.assign;

                element.bind('change', function () {
                    scope.$apply(function () {
                        modelSetter(scope, element[0].files[0]);
                    });
                });
            }
        };
    }])
    .directive('scopeElement', function () {
        return {
            restrict: "A", // E-Element A-Attribute C-Class M-Comments
            replace: false,
            scope: {
                scopeElement: "="
            },
            link: function ($scope, elem, attrs) {
                $scope.scopeElement = elem[0];
            }
        };
    });
})();

(function () {
    angular.module('app')    
    .filter("nospace", function() {
        return function(e) {
            return e?e.replace(/ /g, ""): ""
        }
    })
    .filter("humanizeDoc", function() {
        return function(e) {
            if(e)return"directive"===e.type?e.name.replace(/([A-Z])/g, function(e) {
                return"-"+e.toLowerCase()
            }
            ):e.label||e.name
        }
    })
    .filter('notIntersect', function () {
        return function (arr1, arr2) {
            return arr1.filter(function (n) {
                return arr2.indexOf(n) == -1
            });
        };
    });
})();

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

(function () {
    'use strict';

    angular.module('app').service('filtersService', [fnService]);

    function fnService() {
        return {
            getFilters: function () {
                return {
                    fields: [
                        {
                            name: 'awbBl', label: 'AWB / BL', type: 'text', flex: '20', hideErrorMsg: true
                        },
                        {
                            name: 'shipmentID', label: 'Shipment ID', type: 'text', flex: '20', hideErrorMsg: true
                        },
                        {
                            name: 'status', label: 'Status', type: 'select', flex: '20', hideErrorMsg: true,
                            data: [
                                { value: 'ON TIME', text: 'On time', color: 'green' },
                                { value: 'DELAYED', text: 'Delayed', color: 'red' }
                            ], multiple: false, showSearch: false, emptyOption: 'All',
                            templateSelect: '<md-icon style="color: {{option.color}} !important">label</md-icon><span flex>{{option.text}}</span>'
                        },
                        {
                            name: 'shipmentStatus', label: 'Shipment status', type: 'select', flex: '20', hideErrorMsg: true,
                            data: [
                                { value: 'Not Departed', text: 'Not Departed', color: 'gray' },
                                { value: 'Departed', text: 'Departed', color: '#ffe200' },
                                { value: 'In Transit', text: 'In Transit', color: 'blue' },
                                { value: 'Arrived', text: 'Arrived', color: 'purple' },
                                { value: 'Delivered', text: 'Delivered', color: 'green' }
                            ], multiple: true, showSearch: false,
                            templateSelect: '<md-icon style="color: {{option.color}} !important">label</md-icon><span flex>{{option.text}}</span>'
                        },
                        {
                            name: 'transportarionMode', label: 'Transportarion Mode', type: 'select', flex: '20', hideErrorMsg: true,
                            data: [
                                { value: 'A', text: 'Air' },
                                { value: 'O', text: 'Ocean' }
                            ], multiple: false, showSearch: false, emptyOption: 'All',
                        },
                        {
                            name: 'countryOrigin', label: 'Country origin', type: 'select', flex: '20', hideErrorMsg: true,
                            entity: 'FiltersData/GetOriginCountries', multiple: true, showSearch: true
                        },
                        {
                            name: 'countryDestination', label: 'Country destination', type: 'select', flex: '20', hideErrorMsg: true,
                            entity: 'FiltersData/GetDestinationCountries', multiple: true, showSearch: true
                        },
                        {
                            name: 'cityOrigin', label: 'City origin', type: 'select', flex: '20', hideErrorMsg: true,
                            entity: 'FiltersData/GetOriginCity', multiple: true, showSearch: true
                        },
                        {
                            name: 'cityDestination', label: 'City destination', type: 'select', flex: '20', hideErrorMsg: true,
                            entity: 'FiltersData/GetDestinationCity', multiple: true, showSearch: true
                        },
                        {
                            name: 'FFW', label: 'AGENT / FFWD', type: 'select', flex: '20', hideErrorMsg: true,
                            entity: 'FiltersData/GetFFWs', multiple: true, showSearch: true
                        },
                        {
                            name: 'dateFrom', label: 'From date', type: 'date', flex: '20', hideErrorMsg: true
                        },
                        {
                            name: 'dateTo', label: 'To date', type: 'date', flex: '20', hideErrorMsg: true
                        },
                        {
                            name: 'consigne', label: 'Consignee', type: 'text', flex: '20', hideErrorMsg: true
                        },
                        {
                            name: 'comodity', label: 'Commodity', type: 'text', flex: '20', hideErrorMsg: true
                        },
                        {
                            name: 'containerNumber', label: 'Container number', type: 'text', flex: '20', hideErrorMsg: true
                        },
                    ]
                };
            }
        };
    }
})();

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
(function () {
    'use strict';

    angular.module('app').service('toolsService', ['$mdDialog', fnService]);

    function fnService($mdDialog) {
        return {
            showConfirm: function (title, message, okText, cancelText) {
                okText = okText || "Si";
                cancelText = cancelText || "No";
                var confirm = $mdDialog.confirm()
                      .title(title)
                      .ariaLabel(title)
                      .textContent(message)
                      //.targetEvent(ev)
                      .ok(okText)
                      .cancel(cancelText);

                return $mdDialog.show(confirm);
            },
            showAlert: function (title, message) {
                $mdDialog.show(
                    $mdDialog.alert()
                    .clickOutsideToClose(true)
                    .title(title)
                    .ariaLabel(title)
                    .textContent(message)
                    .ok('Continuar')
                );
            }
        };
    }
})();
