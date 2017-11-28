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
