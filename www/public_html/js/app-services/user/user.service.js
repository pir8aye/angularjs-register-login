(function () {
    "use strict";

    myApp.service("UserService", UserService);

    UserService.$inject = ["$firebaseArray", "$firebaseObject"];

    /**
     * User Service:
     * @param $firebaseArray
     * @param $firebaseObject
     * @returns object
     * @since 1.0
     */
    function UserService($firebaseArray, $firebaseObject) {

        // Firebase Ref
        var ref = firebase.database().ref().child("users");

        // Create
        this.Create = function (uid, data) {
            var user = $firebaseObject(ref.child(uid));
            user.forename = data.forename;
            user.surname = data.surname;
            return user.$save().then(handleSuccess, handleError);
        };

        // Get All
        this.GetAll = function () {
            return $firebaseArray(ref);
        };

        // Get By UID
        this.GetByUID = function (uid) {
            return $firebaseObject(ref.child(uid));
        };

        // Handle Success
        function handleSuccess(ref) {
            return {
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
    }
})();