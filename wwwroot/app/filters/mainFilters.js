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
