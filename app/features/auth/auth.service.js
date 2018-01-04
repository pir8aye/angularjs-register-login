function AuthService($cookies,$firebaseAuth, $rootScope, FirebaseFactory) {
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
    
    return {
        loginWithEmail: (email, password) => {
            return auth.$signInWithEmailAndPassword(email, password).then(handleSuccess, handleError);
        },
        registerWithEmail: (email, password) => {
            return auth.$createUserWithEmailAndPassword(email, password).then(handleSuccess, handleError);
        },
        removeCurrentUser: () => {
            $rootScope.globals = {};
            $cookies.remove('globals');
        },
        setCurrentUser: uid => {
            $rootScope.globals = {
                currentUser: {
                    uid: uid
                }
            };
            $cookies.putObject('globals', $rootScope.globals);
        }
    };
}

AuthService.$inject = ['$cookies','$firebaseAuth', '$rootScope', 'FirebaseFactory'];

export default AuthService;