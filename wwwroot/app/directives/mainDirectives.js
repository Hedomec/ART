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
