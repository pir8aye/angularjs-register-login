(function () {
    "use strict";
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
        $scope.registerSubmit = function () {
            $scope.isLoading = true;
            var email = $scope.user.email;
            var password = $scope.user.password;
            AuthService.register(email, password).then(function (response) {
                if (response.success) {
                    UserService.create(response.uid, $scope.user);
                    FlashService.success("Registration successful", true);
                    $location.path("/login");
                } else {
                    FlashService.danger(response.message);
                    $scope.isLoading = false;
                }
            });
        };

        // Reset the users login status.
        (function () {
            AuthService.logout();
        })();
    }

    RegisterController.$inject = ["$location", "$scope", "AuthService", "FlashService", "UserService"];

    myApp.controller("RegisterController", RegisterController);

})();