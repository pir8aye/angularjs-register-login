function FirebaseUserService($firebaseArray, $firebaseObject, FirebaseFactory) {

    const ref = FirebaseFactory.child('users');

    function handleSuccess(ref) {
        console.log(ref)
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
        let user = $firebaseObject(ref.child(uid));
        user.forename = data.forename;
        user.surname = data.surname;
        return user.$save().then(handleSuccess, handleError);
    };

    this.delete = function (uid) {
        let user = $firebaseObject(ref.child(uid));
        user.$remove().then(handleSuccess, handleError);
    };

    this.get = function (uid) {
        return $firebaseObject(ref.child(uid));
    };

    this.getAll = function () {
        return $firebaseArray(ref);
    };

    this.update = function (uid, data) {
        let user = $firebaseObject(ref.child(uid));
        user.forename = data.forename;
        user.surname = data.surname;
        return user.$save().then(handleSuccess, handleError);
    };
}

FirebaseUserService.$inject = ['$firebaseArray', '$firebaseObject', 'FirebaseFactory'];

export default FirebaseUserService;