(function () {
    'use strict';

    angular
        .module('designdocEditor', [
            //Routes
            'main',
            'editor',

            //Plugins
            'authorization',
            'ngAnimate',
            'ngCookies',
            'ngTouch',
            'ngSanitize',
            'ui.router',
            'ui.bootstrap'
        ])

        // Config
        .config(function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/');
        });

})();

