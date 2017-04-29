(function () {
    "use strict";

    myApp.config(Config);

    Config.$inject = ["$httpProvider", "$routeProvider"];

    function Config($httpProvider, $routeProvider) {
        $routeProvider.when("/", {
            controller: "HomeController",
            templateUrl: "js/app-controllers/home/home.view.html"
        }).when("/login", {
            controller: "LoginController",
            templateUrl: "js/app-controllers/login/login.view.html"
        }).when("/register", {
            controller: "RegisterController",
            templateUrl: "js/app-controllers/register/register.view.html"
        }).otherwise({redirectTo: "/login"});
        //
        $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
    }
})();