"use strict";

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

    // Create
    this.create = function (uid, data) {
        var user = $firebaseObject(ref.child(uid));
        user.forename = data.forename;
        user.surname = data.surname;
        return user.$save().then(handleSuccess, handleError);
    };

    // Delete
    this.delete = function (uid) {
        var user = $firebaseObject(ref.child(uid));
        user.$remove().then(handleSuccess, handleError);
    };

    // Update
    this.update = function (uid, data) {
        var user = $firebaseObject(ref.child(uid));
        user.forename = data.forename;
        user.surname = data.surname;
        return user.$save().then(handleSuccess, handleError);
    };

    // Get All
    this.getAll = function () {
        return $firebaseArray(ref);
    };

    // Get By UID
    this.getByUID = function (uid) {
        return $firebaseObject(ref.child(uid));
    };
}

UserService.$inject = ["$firebaseArray", "$firebaseObject"];

myApp.service("UserService", UserService);