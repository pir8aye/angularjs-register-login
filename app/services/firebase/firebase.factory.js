import Firebase from 'firebase';
import FirebaseConfig from '../../../firebase.config.json';

function FirebaseFactory() {
    Firebase.initializeApp(FirebaseConfig);
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
    }
}

FirebaseFactory.$inject = [];
export default FirebaseFactory;