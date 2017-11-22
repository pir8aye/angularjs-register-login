import Firebase from 'firebase';

function FirebaseFactory() {
    Firebase.initializeApp({
        apiKey: 'AIzaSyDTs23PtJwxkRE59yPn25nx_26_J1y9eYQ',
        authDomain: 'angularjs-register-login.firebaseapp.com',
        databaseURL: 'https://angularjs-register-login.firebaseio.com',
        storageBucket: 'angularjs-register-login.appspot.com',
    });

    return Firebase;
}

FirebaseFactory.$inject = [];

export default FirebaseFactory;