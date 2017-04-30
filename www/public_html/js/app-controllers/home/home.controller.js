(function () {
    "use strict";

    myApp.controller("HomeController", HomeController);

    HomeController.$inject = ["$scope", "user", "users"];

    /**
     * Home Controller:
     * @param $scope
     * @param user
     * @param users
     * @returns void
     * @since 1.0
     */
    function HomeController($scope, user, users) {
        
        $scope.user = user;
        
        $scope.users = users;
    }
})();