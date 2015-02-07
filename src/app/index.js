(function () {
    'use strict';

    angular
        .module('designdocEditor', [
            //Routes
            'main',

            //Plugins
            'authorization',
            'ngAnimate',
            'ngCookies',
            'ngTouch',
            'ngSanitize',
            'ui.router',
            'ui.bootstrap'
        ])
        .config(function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/');
        });

})();

