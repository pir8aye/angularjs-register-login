(function () {
    "use strict";

    /**
     * Login Controller:
     * @param $location
     * @param $scope
     * @param AuthService
     * @param FlashService
     * @returns void
     * @since 1.0
     */
    function LoginController($location, $scope, AuthService, FlashService) {

        $scope.user = {};

        $scope.isLoading = false;

        $scope.loginSubmit = function () {
            $scope.isLoading = true;
            var email = $scope.user.email;
            var password = $scope.user.password;
            AuthService.loginWithEmail(email, password).then(function (response) {
                if (response.success) {
                    AuthService.setCurrentUser(response.uid);
                    $location.path("/");
                } else {
                    FlashService.danger(response.message);
                    $scope.isLoading = false;
                }
            });
        };

        (function () {
            AuthService.logout();
        })();
    }

    LoginController.$inject = ["$location", "$scope", "AuthService", "FlashService"];

    myApp.controller("LoginController", LoginController);
    
})();