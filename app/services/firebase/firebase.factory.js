import Firebase from 'firebase';

function FirebaseFactory(envService) {
    const config = envService.read('firebaseConfig');
    Firebase.initializeApp(config);
    return {
        auth: function () {
            return Firebase.auth();
        },
        child: function (path) {
            return this.ref().child(path);
        },
        ref: function () {
            return Firebase.database().ref();
        }
    };
}

FirebaseFactory.$inject = ['envService'];

export default FirebaseFactory;