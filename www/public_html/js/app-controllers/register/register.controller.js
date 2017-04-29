(function () {
    "use strict";

    myApp.controller("RegisterController", RegisterController);

    RegisterController.$inject = ["$location", "$scope", "FlashService", "UserService"];

    function RegisterController($location, $scope, FlashService, UserService) {
        // 
        $scope.user = {};
        // 
        $scope.loading = false;
        // 
        $scope.Register = function () {
            $scope.loading = true;
            UserService.Create($scope.user)
                    .then(function (response) {
                        if (response.success) {
                            FlashService.Success("Registration successful", true);
                            $location.path("/login");
                        }
                        FlashService.Danger(response.message);
                        $scope.loading = false;
                    });
        };
    }
})();