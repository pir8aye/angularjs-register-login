"use strict";

/**
 
 AuthService.$inject = ["$cookieStore", "$firebaseAuth", "$rootScope"];
 
 myApp.service("AuthService", AuthService);
 * Auth Service:
 * @param $cookieStore
 * @param $firebaseAuth
 * @param $rootScope
 * @returns object
 * @since 1.0
 */
function AuthService($cookieStore, $firebaseAuth, $rootScope) {

    // Auth
    var auth = $firebaseAuth();

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

    // Login With Email
    this.loginWithEmail = function (email, password) {
        return auth.$signInWithEmailAndPassword(email, password).then(handleSuccess, handleError);
    };

    // Logout
    this.logout = function () {
        $rootScope.globals = {};
        $cookieStore.remove("globals");
    };

    // Register
    this.register = function (email, password) {
        return auth.$createUserWithEmailAndPassword(email, password).then(handleSuccess, handleError);
    };

    // Set Current User
    this.setCurrentUser = function (uid) {
        $rootScope.globals = {
            currentUser: {
                uid: uid
            }
        };
        $cookieStore.put("globals", $rootScope.globals);
    };
}

AuthService.$inject = ["$cookieStore", "$firebaseAuth", "$rootScope"];

myApp.service("AuthService", AuthService);