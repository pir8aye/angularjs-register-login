# AngularJS Register & Login (using Firebase)

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/0bb79778c6d749e98976b15a86789eb9)](https://www.codacy.com/app/andrewdyer/angularjs-register-login?utm_source=github.com&utm_medium=referral&utm_content=andrewdyer/angularjs-register-login&utm_campaign=badger)

A basic example of user registration and login using AngularJS and Firebase.

## Installation

Go to project folder and run the npm install command. To install on a production server add the flag `--only=production`

```bash
npm install
```

### Initialise Firebase

To initialise the Firebase SDK, you will need to update /app/app.environment.js and add your Firebase project information to the `firebaseConfig` object. This needs to be done for both the `development` and `production` configuration objects.

```json
firebaseConfig: {
    apiKey: '<your-api-key>',
    authDomain: '<your-auth-domain>',
    databaseURL: '<your-database-url>',
    storageBucket: '<your-storage-bucket>'
}
```

## Useful links
[AngularJS](https://angular.io/)
[Firebase](https://firebase.google.com/)
[AngularJS Environment Plugin](https://github.com/juanpablob/angular-environment/)
[AngularFire](https://github.com/firebase/angularfire/)
[ECMAScript 6 New Features: Overview & Comparison](http://es6-features.org/)
[Socket.IO](https://socket.io/)