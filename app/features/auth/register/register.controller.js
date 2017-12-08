function RegisterController($location, AuthService, FlashService, UserFactory) {

    AuthService.logout();

    this.user = {};
    this.isLoading = false;
    this.registerSubmit = () => {
        this.isLoading = true;
        const email = this.user.email;
        const password = this.user.password;
        AuthService.register(email, password).then(response => {
            if (response.success) {
                UserFactory.create(response.uid, this.user);
                FlashService.success('Registration successful', true);
                $location.path('/login');
            } else {
                FlashService.danger(response.message);
                this.isLoading = false;
            }
        });
    };
}

RegisterController.$inject = ['$location', 'AuthService', 'FlashService', 'UserFactory'];

export default RegisterController;