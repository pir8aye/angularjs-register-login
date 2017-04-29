(function () {
    "use strict";

    myApp.run(Run);

    Run.$inject = ["$cookies", "$location", "$rootScope"];

    // Redirects to the login page if the user is not logged in and trying to
    // access a restricted page.
    function Run($cookies, $location, $rootScope) {
        $rootScope.globals = $cookies.getObject("globals") || {};
        $rootScope.$on("$locationChangeStart", function (event, next, current) {
            var restrictedPage = $.inArray($location.path(), ["/login", "/register"]) === -1;
            var loggedIn = $rootScope.globals.currentUser;
            if (restrictedPage && !loggedIn) {
                $location.path("/login");
            }
        });
    }
})();