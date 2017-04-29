(function () {
    "use strict";

    myApp.controller("LoginController", LoginController);

    LoginController.$inject = ["$location", "$scope", "AuthService", "FlashService"];

    function LoginController($location, $scope, AuthService, FlashService) {

        // 
        $scope.user = {};

        // 
        $scope.isLoading = false;

        // 
        $scope.Login = function () {
            $scope.isLoading = true;
            var email = $scope.user.email;
            var password = $scope.user.password;
            AuthService.LoginWithEmail(email, password).then(function (response) {
                if (response.success) {
                    AuthService.SetCurrentUser(response.uid);
                    $location.path("/");
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