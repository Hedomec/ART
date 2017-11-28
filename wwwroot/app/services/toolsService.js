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
