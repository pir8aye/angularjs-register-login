function Controller(AuthService) {
    this.AuthService = AuthService;
    console.log('Register controller');
}

Controller.$inject = ['AuthService'];

export default Controller;