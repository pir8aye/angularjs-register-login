(function () {
    "use strict";

    myApp.controller("HomeController", HomeController);

    HomeController.$inject = ["$scope", "user", "users"];

    function HomeController($scope, user, users) {

        $scope.user = user;
        $scope.users = users;
    }
})();