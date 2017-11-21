function Routes($routeProvider) {
    $routeProvider
            .when('/login', {
                template: require('./login/login.view.html'),
                controller: 'LoginController',
            })
            .when('/register', {
                template: require('./register/register.view.html'),
                controller: 'RegisterController',
            });
}

Routes.$inject = ['$routeProvider'];

export default Routes;