/**
 * Created by arnoutaertgeerts on 2/7/15.
 */

(function() {
    'use strict';

    angular
        .module('db')
        .service('db', db);

    db.$inject = [
        'Auth'
    ];

    function db(Auth) {
        return {
            setup: setup
        };

        function setup(url, username, password) {
            Auth.remote(url);
            return Auth.login(username, password);
        }
    }
})();
