function ProfileController(user, FirebaseUserService, FlashService) {
    this.user = user;
    this.isLoading = false;
    this.formSubmit = () => {
        this.isLoading = true;
        FirebaseUserService.update(this.user.$id, this.user).then(response => {
            if (response.success) {
                FlashService.success('Profile successfully updated!');
            }
            this.isLoading = false;
        });
    }
}

ProfileController.$inject = ['user', 'FirebaseUserService', 'FlashService'];

export default ProfileController;