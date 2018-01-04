import Firebase from 'firebase';

function FirebaseFactory(envService) {
    Firebase.initializeApp(envService.read('firebaseConfig'));
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