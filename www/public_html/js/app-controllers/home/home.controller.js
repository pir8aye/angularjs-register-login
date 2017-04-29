(function () {
    "use strict";

    myApp.controller("HomeController", HomeController);

    HomeController.$inject = ["$rootScope", "$scope", "UserService"];

    function HomeController($rootScope, $scope, UserService) {
        // 
        $scope.user = {};
        // 
        (function () {
            var userID = $rootScope.globals.currentUser.id;
            UserService.GetByID(userID).then(function (user) {
                $scope.user = user;
            });
        })();
    }
})();