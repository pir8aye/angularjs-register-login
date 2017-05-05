(function () {
    "use strict";


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

    HomeController.$inject = ["$scope", "user", "users"];

    myApp.controller("HomeController", HomeController);

})();