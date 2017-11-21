function Routes($routeProvider, $locationProvider) {
    $routeProvider.otherwise('/');
    $locationProvider.html5Mode();
}

Routes.$inject = ['$routeProvider', '$locationProvider'];

export default Routes;