/**
 * Created by arnoutaertgeerts on 2/7/15.
 */

(function () {
    angular
        .module('editor', [
            'ui.router',
            'pouchdb-model',
            'ui-elements'
        ])
        .config(config);

    config.$inject = [
        '$stateProvider'
    ];

    function config($stateProvider) {

        $stateProvider.state('editor', {
            url: '/editor',
            templateUrl: 'app/editor/editor.html',
            controller: 'EditorCtrl',
            controllerAs: 'vm'
        });
    }


})();