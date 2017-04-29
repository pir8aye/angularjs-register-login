(function () {
    "use strict";

    myApp.config(Routes);

    Routes.$inject = ["$routeProvider"];
    function Routes($routeProvider) {
        $routeProvider.when("/", {
            controller: "HomeController",
            templateUrl: "js/app-controllers/home/home.view.html",
            resolve: {
                user: ["$rootScope", "UserService", function ($rootScope, UserService) {
                        var uid = $rootScope.globals.currentUser.uid;
                        return UserService.GetByUID(uid).$loaded();
                    }
                ],
                users: ["UserService", function (UserService) {
                        return UserService.GetAll().$loaded();
                    }
                ]
            }
        }).when("/login", {
            controller: "LoginController",
            templateUrl: "js/app-controllers/login/login.view.html"
        }).when("/register", {
            controller: "RegisterController",
            templateUrl: "js/app-controllers/register/register.view.html"
        }).otherwise({redirectTo: "/login"});
        //
    }
})();