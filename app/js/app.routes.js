function Routes($routeProvider, $locationProvider) {
    $routeProvider.otherwise('/');
    $locationProvider.html5Mode(true);
}

Routes.$inject = ['$routeProvider', '$locationProvider'];

export default Routes;