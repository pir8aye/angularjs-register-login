class ProfileController {
    constructor(user, FirebaseUserService) {
        this.user = user;
        this.userId = this.user.$id;
        this.isLoading = false;
        this.FirebaseUserService = FirebaseUserService;
    }
    formSubmit() {
        this.isLoading = true;
        this.FirebaseUserService.update(this.userId, this.user).then(response => {
            if(response.success) {
                
            }
            this.isLoading = false;
        });
    }
}

ProfileController.$inject = ['user', 'FirebaseUserService'];

export default ProfileController;