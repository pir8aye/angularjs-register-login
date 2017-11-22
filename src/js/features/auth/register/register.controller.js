class RegisterController {
    constructor($location, AuthService, FlashService, FirebaseUserService) {
        this.user = {};
        this.isLoading = false;

        this.location = $location;
        this.AuthService = AuthService;
        this.FlashService = FlashService;
        this.FirebaseUserService = FirebaseUserService;
        AuthService.logout();
    }
    registerSubmit() {
        this.isLoading = true;
        const email = this.user.email;
        const password = this.user.password;
        this.AuthService.register(email, password).then(response => {
            if (response.success) {
                this.FirebaseUserService.create(response.uid, this.user);
                this.FlashService.success('Registration successful', true);
                this.location.path('/login');
            } else {
                this.FlashService.danger(response.message);
                this.isLoading = false;
            }
        });
    }
}

RegisterController.$inject = ['$location', 'AuthService', 'FlashService', 'FirebaseUserService'];

export default RegisterController;