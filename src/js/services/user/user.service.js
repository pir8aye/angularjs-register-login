function Service($firebaseArray, $firebaseObject, Firebase) {

    var ref = Firebase.database().ref().child('users');

    function handleSuccess(ref) {
        return {
            success: true
        };
    }

    function handleError(error) {
        return {
            message: error.message,
            success: false
        };
    }

    this.create = function (uid, data) {
        var user = $firebaseObject(ref.child(uid));
        user.forename = data.forename;
        user.surname = data.surname;
        return user.$save().then(handleSuccess, handleError);
    };

    this.delete = function (uid) {
        var user = $firebaseObject(ref.child(uid));
        user.$remove().then(handleSuccess, handleError);
    };

    this.update = function (uid, data) {
        var user = $firebaseObject(ref.child(uid));
        user.forename = data.forename;
        user.surname = data.surname;
        return user.$save().then(handleSuccess, handleError);
    };

    this.getAll = function () {
        return $firebaseArray(ref);
    };

    this.getByUID = function (uid) {
        return $firebaseObject(ref.child(uid));
    };
}

Service.$inject = ['$firebaseArray', '$firebaseObject', 'Firebase'];

export default Service;