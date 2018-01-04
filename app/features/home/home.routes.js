function Routes($routeProvider) {
    $routeProvider
            .when('/', {
                controller: 'HomeController',
                controllerAs: 'ctrl',
                resolve: {
                    user: ['$rootScope', 'UserFactory', ($rootScope, UserFactory) => {
                            const uid = $rootScope.globals.currentUser.uid;
                            return UserFactory.get(uid).$loaded();
                        }
                    ]
                },
                template: require('./home.view.html'),
                title: 'Homepage'
            });
}

Routes.$inject = ['$routeProvider'];

export default Routes;