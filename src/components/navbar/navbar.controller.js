(function() {
    'use strict';

    angular
        .module('designdocEditor')
        .controller('NavBarCtrl', Controller);

    Controller.$inject = [
        '$scope',
        '$state',
        'Auth'
    ];

    function Controller($scope, $state, Auth) {
        $scope.logout = function() {
            Auth.logout().then(function() {
                $state.go('home');
            });
        };

        $scope.user = Auth.user;
    }

}());