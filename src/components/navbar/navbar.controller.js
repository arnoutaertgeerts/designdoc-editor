(function() {
    'use strict';

    angular
        .module('designdocEditor')
        .controller('NavBarCtrl', Controller);

    Controller.$inject = [
        '$scope',
        'Auth'
    ];

    function Controller($scope, Auth) {
        $scope.logout = Auth.logout;
        $scope.user = Auth.user;
    }

}());