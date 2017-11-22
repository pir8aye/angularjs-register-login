function HomeController($scope, user) {
    $scope.user = user;
}

HomeController.$inject = ['$scope', 'user'];

export default HomeController;