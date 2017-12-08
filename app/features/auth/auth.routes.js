function Routes($routeProvider) {
    $routeProvider
            .when('/login', {
                controller: 'LoginController',
                controllerAs: 'ctrl',
                template: require('./login/login.view.html'),
                title: 'Login'
            })
            .when('/profile', {
                controller: 'ProfileController',
                controllerAs: 'ctrl',
                resolve: {
                    user: ['$rootScope', 'FirebaseUserService', ($rootScope, FirebaseUserService) => {
                            const uid = $rootScope.globals.currentUser.uid;
                            return FirebaseUserService.get(uid).$loaded();
                        }
                    ]
                },
                template: require('./profile/profile.view.html'),
                title: 'Profile'
            })
            .when('/register', {
                controller: 'RegisterController',
                controllerAs: 'ctrl',
                template: require('./register/register.view.html'),
                title: 'Register'

            });
}

Routes.$inject = ['$routeProvider'];

export default Routes;