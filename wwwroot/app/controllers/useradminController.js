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
