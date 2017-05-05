(function () {
    "use strict";

    /**
     * Run: Redirects to the login page if the user is not logged in and trying
     * to access a restricted page.
     * @param $cookies
     * @param $location
     * @param $rootScope
     * @returns void
     * @since 1.0
     */
    function Run($cookies, $location, $rootScope) {
        $rootScope.globals = $cookies.getObject("globals") || {};
        $rootScope.$on("$locationChangeStart", function (event, next, current) {
            var restrictedPage = $.inArray($location.path(), ["/login", "/register"]) === -1;
            var loggedIn = $rootScope.globals.currentUser;
            if (restrictedPage && !loggedIn) {
                $location.path("/login");
            }
        });
        $rootScope.$on("$routeChangeSuccess", function (event, current, previous) {
            $rootScope.title = current.$$route.title;
        });
    }

    Run.$inject = ["$cookies", "$location", "$rootScope"];

    myApp.run(Run);
    
})();