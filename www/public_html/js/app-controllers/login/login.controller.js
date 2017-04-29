(function () {
    "use strict";

    myApp.controller("LoginController", LoginController);

    LoginController.$inject = ["$location", "$scope", "AuthService", "FlashService"];

    function LoginController($location, $scope, AuthService, FlashService) {
        // 
        $scope.user = {};
        // 
        $scope.loading = false;
        // 
        $scope.Login = function () {
            $scope.loading = true;
            var email = $scope.user.email;
            var password = $scope.user.password;
            AuthService.LoginWithEmail(email, password).then(function (response) {
                if (response.success) {
                    AuthService.SetCurrentUser(response.data);
                    $location.path("/");
                }
                FlashService.Danger("");
                $scope.loading = false;
            });
        };
    }
})();