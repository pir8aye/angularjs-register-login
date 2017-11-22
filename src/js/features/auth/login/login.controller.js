class LoginController {
    constructor($location, AuthService, FlashService) {
        this.location = $location;
        this.AuthService = AuthService;
        this.FlashService = FlashService;
        
        this.AuthService.logout();
        
        this.user = {};
        this.isLoading = false;
    }
    loginSubmit () {
        this.isLoading = true;
        const email = this.user.email;
        const password = this.user.password;
        this.AuthService.loginWithEmail(email, password).then(response => {
            if (response.success) {
                this.AuthService.setCurrentUser(response.uid);
                this.location.path("/");
            } else {
                this.FlashService.danger(response.message);
                this.isLoading = false;
            }
        });
    }
}

LoginController.$inject = ['$location', 'AuthService', 'FlashService'];

export default LoginController;