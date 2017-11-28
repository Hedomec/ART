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
