(function () {
    "use strict";

    myApp.service("UserService", UserService);

    UserService.$inject = ["$firebaseArray", "$firebaseObject"];

    function UserService($firebaseArray, $firebaseObject) {

        // Firebase Ref
        var ref = firebase.database().ref().child("users");

        // Get All
        this.GetAll = function () {
            return $firebaseArray(ref);
        };

        // 
        this.GetByUID = function (uid) {
            return $firebaseObject(ref.child(uid));
        };
//        
//        // 
//        this.Create = function (user) {
//            return $http.post("/api/users", $.param(user)).then(handleSuccess, handleError("Error creating user"));
//        };
//        // 
//        this.Delete = function (id) {
//            return $http.delete("/api/users/" + id).then(handleSuccess, handleError("Error deleting user"));
//        };
//        // 
//        this.Update = function (user) {
//            return $http.put("/api/users/" + user.id, user).then(handleSuccess, handleError("Error updating user"));
//        };
//        // 
//        function handleSuccess(res) {
//            return res.data;
//        }
//        // 
//        function handleError(error) {
//            return function () {
//                return {
//                    success: false,
//                    message: error
//                };
//            };
//        }
    }
})();