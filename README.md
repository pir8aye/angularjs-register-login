# AngularJS Register & Login (using Firebase)

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/0bb79778c6d749e98976b15a86789eb9)](https://www.codacy.com/app/andrewdyer/angularjs-register-login?utm_source=github.com&utm_medium=referral&utm_content=andrewdyer/angularjs-register-login&utm_campaign=badger)

A basic example of user registration and login using AngularJS and Firebase.

## Installation

Go to project folder and run the npm install command;

```bash
npm install
```

You will need to initialise the Firebase SDK. To do this you'll need to create a `firebase.config.json` file in the application's root folder and add the following with your projects information:

```json
{
    "apiKey": "<your-api-key>",
    "authDomain": "<your-auth-domain>",
    "databaseURL": "<your-database-url>",
    "storageBucket": "<your-storage-bucket>"
}
```