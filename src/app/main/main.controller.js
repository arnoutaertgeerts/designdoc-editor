(function() {
    'use strict';

    angular
        .module('main')
        .controller('MainCtrl', MainCtrl);

    MainCtrl.$inject = [
        '$scope',
        '$state',
        'db',
        'url',
        'username',
        'password'
    ];

    function MainCtrl($scope, $state, db, url, username, password) {
        var vm = this;

        vm.setup = setup;

        setup(url, username, password);

        function setup(url, username, password) {
            url = url + '/_users';

            db.setup(url, username, password).then(function() {
                $state.go('editor');
            })
        }

    }

})();