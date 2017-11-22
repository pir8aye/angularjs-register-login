function Run($cookies, $location, $rootScope) {
    $rootScope.globals = $cookies.getObject('globals') || {};
    $rootScope.$on('$locationChangeStart', (event, next, current) => {
        const restrictedPage = $.inArray($location.path(), ['/login', '/register']) === -1;
        const loggedIn = $rootScope.globals.currentUser;
        if (restrictedPage && !loggedIn) {
            $location.path('/login');
        }
    });
}

Run.$inject = ['$cookies', '$location', '$rootScope'];

export default Run;