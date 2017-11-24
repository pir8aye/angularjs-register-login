class HomeController {
    constructor(user) {
        this.user = user;
    }
}

HomeController.$inject = ['user'];

export default HomeController;