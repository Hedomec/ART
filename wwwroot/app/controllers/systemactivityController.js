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