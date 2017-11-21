function Service(Firebase, $firebaseAuth) {

    const auth = $firebaseAuth(Firebase.auth());


    this.login = (email, password) => {
        return auth.$signInWithEmailAndPassword(email, password).then(firebaseUser => {
            return {
                uid: firebaseUser.uid,
                success: true
            }
        }, error => {
            return {
                message: error.message,
                success: false
            };
        });
    }

}

Service.$inject = ['Firebase', '$firebaseAuth'];

export default Service;