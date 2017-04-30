(function () {
    "use strict";

    myApp.controller("RegisterController", RegisterController);

    RegisterController.$inject = ["$location", "$scope", "AuthService", "FlashService", "UserService"];

    /**
     * Register Controller:
     * @param $location
     * @param $scope
     * @param AuthService
     * @param FlashService
     * @param UserService
     * @returns void
     * @since 1.0
     */
    function RegisterController($location, $scope, AuthService, FlashService, UserService) {

        // 
        $scope.user = {};

        // 
        $scope.isLoading = false;

        // 
        $scope.Register = function () {
            $scope.isLoading = true;
            var email = $scope.user.email;
            var password = $scope.user.password;
            AuthService.Register(email, password).then(function (response) {
                if (response.success) {
                    UserService.Create(response.uid, $scope.user);
                    FlashService.Success("Registration successful", true);
                    $location.path("/login");
                } else {
                    FlashService.Danger(response.message);
                    $scope.isLoading = false;
                }
            });
        };

        // Reset the users login status.
        (function () {
            AuthService.Logout();
        })();
    }
})();