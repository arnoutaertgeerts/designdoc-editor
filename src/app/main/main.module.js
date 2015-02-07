/**
 * Created by arnoutaertgeerts on 2/7/15.
 */

(function () {
    'use strict';

    angular
        .module('main', [
            'ui.router'
        ])
        .config(config);

    config.$inject = [
        '$stateProvider'
    ];

    function config($stateProvider) {

        $stateProvider.state('home', {
            url: '/',
            templateUrl: 'app/main/main.html',
            controller: 'MainCtrl',
            controllerAs: 'vm'
        });
    }

})();