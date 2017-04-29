(function () {
    "use strict";

    myApp.service("UserService", UserService);

    UserService.$inject = ["$http"];

    function UserService($http) {
        // 
        this.Create = function (user) {
            return $http.post("/api/users", $.param(user)).then(handleSuccess, handleError("Error creating user"));
        };
        // 
        this.Delete = function (id) {
            return $http.delete("/api/users/" + id).then(handleSuccess, handleError("Error deleting user"));
        };
        // 
        this.GetAll = function () {
            return $http.get("/api/users").then(handleSuccess, handleError("Error getting all users"));
        };
        // 
        this.GetByEmail = function (email) {
            return $http.get("/api/users/" + email).then(handleSuccess, handleError("Error getting user by username"));
        };
        // 
        this.GetByID = function (id) {
            return $http.get("/api/users/" + id).then(handleSuccess, handleError("Error getting user by id"));
        };
        // 
        this.Update = function (user) {
            return $http.put("/api/users/" + user.id, user).then(handleSuccess, handleError("Error updating user"));
        };
        // 
        function handleSuccess(res) {
            return res.data;
        }
        // 
        function handleError(error) {
            return function () {
                return {
                    success: false,
                    message: error
                };
            };
        }
    }
})();