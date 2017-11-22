function Service($cookieStore, $firebaseAuth, $rootScope, FirebaseFactory) {

    const auth = $firebaseAuth(FirebaseFactory.auth());

    function handleSuccess(firebaseUser) {
        return {
            uid: firebaseUser.uid,
            success: true
        };
    }

    function handleError(error) {
        return {
            message: error.message,
            success: false
        };
    }

    this.loginWithEmail = function (email, password) {
        return auth.$signInWithEmailAndPassword(email, password).then(handleSuccess, handleError);
    };

    this.logout = function () {
        $rootScope.globals = {};
        $cookieStore.remove('globals');
    };
    this.register = function (email, password) {
        return auth.$createUserWithEmailAndPassword(email, password).then(handleSuccess, handleError);
    };

    this.setCurrentUser = function (uid) {
        $rootScope.globals = {
            currentUser: {
                uid: uid
            }
        };
        $cookieStore.put('globals', $rootScope.globals);
    };

}

Service.$inject = ['$cookieStore', '$firebaseAuth', '$rootScope', 'FirebaseFactory'];

export default Service;