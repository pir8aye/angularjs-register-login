(function () {
    "use strict";

    myApp.run(Run);

    Run.$inject = ["$cookies", "$http", "$location", "$rootScope"];

    function Run($cookies, $http, $location, $rootScope) {
        $http.defaults.headers.common['Authorization'] = 'Basic ' + 'authdata'; //del
        $rootScope.globals = $cookies.getObject("globals") || {};
        if ($rootScope.globals.currentUser) {
            $http.defaults.headers.common["Authorization"] = "Basic " + $rootScope.globals.currentUser.authdata;
        }
        $rootScope.$on("$locationChangeStart", function (event, next, current) {
            // redirect to login page if not logged in and trying to access a restricted page
            var restrictedPage = $.inArray($location.path(), ["/login", "/register"]) === -1;
            var loggedIn = $rootScope.globals.currentUser;
            if (restrictedPage && !loggedIn) {
                $location.path("/login");
            }
        });
    }
})();