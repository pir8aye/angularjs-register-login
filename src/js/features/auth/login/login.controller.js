function Controller($location, $scope, AuthService, FlashService) {
    $scope.user = {};
    $scope.isLoading = false;
    $scope.loginSubmit = () => {
        $scope.isLoading = true;
        const email = $scope.user.email;
        const password = $scope.user.password;
        AuthService.loginWithEmail(email, password).then(response => {
            if (response.success) {
                AuthService.setCurrentUser(response.uid);
                $location.path("/");
            } else {
                FlashService.danger(response.message);
                $scope.isLoading = false;
            }
        });
    };
    (() => {
        AuthService.logout();
    })();
}

Controller.$inject = ['$location', '$scope', 'AuthService', 'FlashService'];

export default Controller;