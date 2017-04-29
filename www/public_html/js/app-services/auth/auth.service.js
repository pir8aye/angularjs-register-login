(function () {
    "use strict";

    myApp.service("AuthService", AuthService);

    AuthService.$inject = ["$cookieStore", "$http", "$rootScope"];

    function AuthService($cookieStore, $http, $rootScope) {
        // 
        this.LoginWithEmail = function (email, password) {
            return $http.post("http://dev/myapp/settings/account", $.param({email: email, password: password})).then(handleSuccess, handleError(""));
        };
        // 
        this.Logout = function () {
            $rootScope.globals = {};
            $cookieStore.remove('globals');
        };
        // 
        this.SetCurrentUser = function (user) {};
        //
        function handleSuccess(res) {
            return res.data;
        }
        //
        function handleError(error) {
            return function () {
                return {
                    success: false
                };
            };
        }
    }
})();