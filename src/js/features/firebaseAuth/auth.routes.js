function Routes($routeProvider) {
    $routeProvider
            .when('/login', {
                template: require('./login/login.view.html'),
                controller: 'LoginController',
                title: 'Login'
            })
            .when('/register', {
                template: require('./register/register.view.html'),
                controller: 'RegisterController',
                title: 'Register'
            });
}

Routes.$inject = ['$routeProvider'];

export default Routes;