(function() {
    'use strict';

    angular
        .module('main')
        .controller('MainCtrl', MainCtrl);

    MainCtrl.$inject = [
        '$scope',
        '$state',
        'db'
    ];

    function MainCtrl($scope, $state, db) {
        var vm = this;

        vm.setup = setup;


        function setup(url, username, password) {
            db.setup(url, username, password).then(function() {
                $state.go('editor');
            })
        }

    }

})();