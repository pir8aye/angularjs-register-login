import Firebase from 'firebase';
import FirebaseConfig from '../../../../firebase.config.json';

function FirebaseFactory() {
    Firebase.initializeApp(FirebaseConfig);

    return Firebase;
}

FirebaseFactory.$inject = [];

export default FirebaseFactory;