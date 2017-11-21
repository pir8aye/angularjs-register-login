function Run($rootScope) {
    $rootScope.$on('$routeChangeSuccess', (event, current, previous) => {
        $rootScope.title = current.$$route.title;
    });
}

Run.$inject = ['$rootScope'];

export default Run;