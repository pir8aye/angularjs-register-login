function Routes($routeProvider) {
    $routeProvider
            .when('/', {
                template: require('./home.view.html'),
                controller: 'HomeController',
                title: 'Homepage'
            });
}

Routes.$inject = ['$routeProvider'];

export default Routes;