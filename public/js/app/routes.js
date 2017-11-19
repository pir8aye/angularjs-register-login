"use strict";

/**
 * Routes:
 * @param $routeProvider
 * @returns void
 * @since 1.0
 */
function Routes($routeProvider) {
    $routeProvider.when("/", {
        title: "Home",
        controller: "HomeController",
        resolve: {
            user: ["$rootScope", "UserService", function ($rootScope, UserService) {
                    var uid = $rootScope.globals.currentUser.uid;
                    return UserService.getByUID(uid).$loaded();
                }
            ],
            users: ["UserService", function (UserService) {
                    return UserService.getAll().$loaded();
                }
            ]
        },
        templateUrl: "js/app-controllers/home/home.view.html"
    }).when("/login", {
        title: "Login",
        controller: "LoginController",
        templateUrl: "js/app-controllers/login/login.view.html"
    }).when("/register", {
        title: "Register",
        controller: "RegisterController",
        templateUrl: "js/app-controllers/register/register.view.html"
    }).otherwise({redirectTo: "/login"});
}

Routes.$inject = ["$routeProvider"];

myApp.config(Routes);