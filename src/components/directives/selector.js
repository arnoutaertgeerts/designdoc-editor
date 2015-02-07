(function() {
    'use strict';

    angular
        .module('ui-elements')
        .directive('selector', selector);

    function selector() {

        var directive = {
            link: link,
            templateUrl: 'components/directives/selector.html',
            restrict: 'E',
            scope: {
                docs: '=docs'
            }
        };

        return directive;

        function link(scope, element, attrs) {

            scope.showFunctions = false;
            scope.showEditor = false;

            scope.pickDoc = pickDoc;
            scope.pickFunction = pickFunction;

            scope.addFunction = addFunction;
            scope.changeName = changeName;
            scope.save = save;
            scope.remove = remove;

            scope.size = size;
            scope.doc = {};
            scope.savedDocs = [];

            //Initial navigation of the director (set to @ to prevent initial matches)
            scope.nav = {
                index: '@',
                type: '',
                name: '@'
            };

            //Check if a document has changed
            var saved = [];
            scope.changes = [];

            scope.data = {
                name: ''
            };

            var stopWatch = scope.$watch('docs', function(newDocs, oldDocs) {
                if(newDocs !== undefined) {
                    angular.copy(newDocs, saved);
                    stopWatch();
                }
            });

            scope.$watch('docs', function(newDocs, oldDocs) {
                if(newDocs !== undefined && oldDocs !== undefined) {
                    var changes = [];
                    newDocs.forEach(function(doc, i) {

                        //Don't check the rev values
                        saved[i]._rev = newDocs[i]._rev;
                        changes.push(!angular.equals(newDocs[i], saved[i]));
                    });

                    scope.changes = changes;
                }

            }, true);


            function pickDoc(doc) {
                scope.showFunctions = true;
                scope.showEditor = false;
                scope.doc = doc;

                scope.nav.index = scope.docs.indexOf(doc);
            }

            function changeName(name) {
                if (name !== scope.nav.name) {
                    var newFunction = scope.docs[scope.nav.index][scope.nav.type][scope.nav.name];

                    scope.docs[scope.nav.index][scope.nav.type][name] = newFunction;
                    scope.docs[scope.nav.index][scope.nav.type][scope.nav.name] = undefined;
                    delete scope.docs[scope.nav.index][scope.nav.type][scope.nav.name];

                    scope.nav.name = name;
                }
            }

            function pickFunction(type, value) {
                scope.showEditor = true;

                scope.nav.type = type;
                scope.nav.name = value;
                scope.data.name = value;

            }

            function addFunction(type, name) {
                var newFunction = {};

                //Check which type of function we need to add
                if (type == 'views') {
                    newFunction[name] = {
                                'map': '',
                                'reduce': ''
                    };
                } else {
                    newFunction[name] = '';
                }

                //Add the property if it does not exist already
                if(!scope.docs[scope.nav.index].hasOwnProperty(type)){
                    scope.docs[scope.nav.index][type] = {};
                }

                //Add the function to the right design document
                angular.extend(scope.docs[scope.nav.index][type], newFunction);

            }

            function size (obj) {
                var size = 0, key;
                for (key in obj) {
                    if (obj.hasOwnProperty(key)) size++;
                }
                return size;
            }

            function save(doc) {
                var promise = doc.$save();
                promise.then(function(res) {
                    console.log(res);
                });
                angular.copy(scope.docs[scope.nav.index], saved[scope.nav.index]);
            }

            function remove() {
                scope.docs[scope.nav.index][scope.nav.type][scope.nav.name] = undefined;
                delete scope.docs[scope.nav.index][scope.nav.type][scope.nav.name];

                scope.nav.name = '@';

                pickDoc(scope.docs[scope.nav.index]);
            }
        }
    }

})();
