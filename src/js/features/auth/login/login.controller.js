function Controller(AuthService) {
    AuthService.login('andrewdyer@outlook.com', 'password').then(function (response) {
        console.log(response)
    });
}

Controller.$inject = ['AuthService'];

export default Controller;