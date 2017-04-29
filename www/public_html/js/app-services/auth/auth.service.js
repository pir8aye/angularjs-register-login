(function () {
    "use strict";

    myApp.service("AuthService", AuthService);

    AuthService.$inject = ["$cookieStore", "$firebaseAuth", "$rootScope"];

    function AuthService($cookieStore, $firebaseAuth, $rootScope) {

        // Auth
        var auth = $firebaseAuth();

        // Login With Email
        this.LoginWithEmail = function (email, password) {
            return auth.$signInWithEmailAndPassword(email, password).then(handleSuccess, handleError);
        };

        // Logout
        this.Logout = function () {
            $rootScope.globals = {};
            $cookieStore.remove("globals");
        };

        // Register
        this.Register = function (email, password) {
            return auth.$createUserWithEmailAndPassword(email, password).then(handleSuccess, handleError);
        };

        // Set Current User
        this.SetCurrentUser = function (uid) {
            $rootScope.globals = {
                currentUser: {
                    uid: uid
                }
            };
            $cookieStore.put("globals", $rootScope.globals);
        };
    }

    // Handle Success
    function handleSuccess(firebaseUser) {
        return {
            uid: firebaseUser.uid,
            success: true
        };
    }

    // Handle Error
    function handleError(error) {
        return {
            message: error.message,
            success: false
        };
    }
})();