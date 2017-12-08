function Routes($routeProvider) {
    $routeProvider
            .when('/', {
                controller: 'HomeController',
                controllerAs: 'ctrl',
                resolve: {
                    user: ['$rootScope', 'FirebaseUserService', ($rootScope, FirebaseUserService) => {
                            const uid = $rootScope.globals.currentUser.uid;
                            return FirebaseUserService.getByUID(uid).$loaded();
                        }
                    ]
                },
                template: require('./home.view.html'),
                title: 'Homepage'
            });
}

Routes.$inject = ['$routeProvider'];

export default Routes;