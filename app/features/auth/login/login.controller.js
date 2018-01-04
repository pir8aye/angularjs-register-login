function LoginController($location, AuthService, FlashService) {

    AuthService.removeCurrentUser();

    this.user = {};
    this.isLoading = false;
    this.loginSubmit = () => {
        this.isLoading = true;
        const email = this.user.email;
        const password = this.user.password;
        AuthService.loginWithEmail(email, password).then(response => {
            if (response.success) {
                AuthService.setCurrentUser(response.uid);
                $location.path("/");
            } else {
                FlashService.danger(response.message);
                this.isLoading = false;
            }
        });
    };
}

LoginController.$inject = ['$location', 'AuthService', 'FlashService'];

export default LoginController;