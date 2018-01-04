function UserFactory($firebaseArray, $firebaseObject, FirebaseFactory) {
    const ref = FirebaseFactory.child('users');

    function handleSuccess() {
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

    return {
        create: (uid, data) => {
            let user = $firebaseObject(ref.child(uid));
            user.forename = data.forename;
            user.surname = data.surname;
            return user.$save().then(handleSuccess, handleError);
        },
        delete: uid => {
            let user = $firebaseObject(ref.child(uid));
            user.$remove().then(handleSuccess, handleError);
        },
        get: uid => {
            return $firebaseObject(ref.child(uid));
        },
        update: (uid, data) => {
            let user = $firebaseObject(ref.child(uid));
            user.forename = data.forename;
            user.surname = data.surname;
            return user.$save().then(handleSuccess, handleError);
        }
    };
}

UserFactory.$inject = ['$firebaseArray', '$firebaseObject', 'FirebaseFactory'];

export default UserFactory;