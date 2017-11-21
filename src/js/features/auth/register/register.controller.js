function Controller($location, $scope, AuthService, FlashService, UserService) {
    $scope.user = {};
    $scope.isLoading = false;
    $scope.registerSubmit = function () {
        $scope.isLoading = true;
        var email = $scope.user.email;
        var password = $scope.user.password;
        AuthService.register(email, password).then(function (response) {
            if (response.success) {
                UserService.create(response.uid, $scope.user);
                FlashService.success('Registration successful', true);
                $location.path('/login');
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

Controller.$inject = ['$location', '$scope', 'AuthService', 'FlashService', 'UserService'];

export default Controller;