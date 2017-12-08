function HomeController(user) {
    this.user = user;
}

HomeController.$inject = ['user'];

export default HomeController;