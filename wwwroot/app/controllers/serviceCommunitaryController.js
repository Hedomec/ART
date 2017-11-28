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