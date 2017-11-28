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