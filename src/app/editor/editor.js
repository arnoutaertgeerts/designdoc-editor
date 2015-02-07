/**
 * Created by arnoutaertgeerts on 2/7/15.
 */

(function() {
    'use strict';

    angular
        .module('editor')
        .controller('EditorCtrl', controller);

    controller.$inject = [
        '$scope',
        'Model'
    ];

    function controller($scope, Model) {
        var vm = this;
        vm.docs = [];

        Model('https://housemt.couchappy.com/', '_users').all({
            include_docs: true,
            startkey: '_design/'
        }).then(function(data) {
            vm.docs = data;
        })
    }
})();