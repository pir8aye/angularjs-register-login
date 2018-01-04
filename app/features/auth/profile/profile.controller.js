function ProfileController(user, FlashService, UserFactory) {
    this.user = user;
    this.isLoading = false;
    this.formSubmit = () => {
        this.isLoading = true;
        UserFactory.update(this.user.$id, this.user).then(response => {
            if (response.success) {
                FlashService.success('Profile successfully updated!');
            }
            this.isLoading = false;
        });
    };
}

ProfileController.$inject = ['user', 'FlashService', 'UserFactory'];

export default ProfileController;