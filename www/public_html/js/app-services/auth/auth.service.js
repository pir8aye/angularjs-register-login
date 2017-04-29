(function () {
    "use strict";

    myApp.service("AuthService", AuthService);

    AuthService.$inject = ["$cookieStore", "$firebaseAuth", "$rootScope"];

    function AuthService($cookieStore, $firebaseAuth, $rootScope) {

        // Auth
        var auth = $firebaseAuth();

        // Login With Email
        this.LoginWithEmail = function (email, password) {
            return auth.$signInWithEmailAndPassword(email, password).then(function (firebaseUser) {
                return {
                    uid: firebaseUser.iid,
                    success: true
                };
            }, function (error) {
                return {
                    message: error.message,
                    success: false
                };
            });
        };
        
        // Logout
        this.Logout = function () {
            $rootScope.globals = {};
            $cookieStore.remove("globals");
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
})();