# AngularJS Register & Login (using Firebase)

A basic example of user registration and login using AngularJS and Firebase.

## Installation
* Clone this repo to a folder on your server.
* Activate mod_rewrite, route all traffic to application's www/public_html folder.

### Create an Account
The first thing you need to do is sign up for a free Firebase account and create a project.

### Add Firebase to the Project
You will need to initialise the Firebase SDK. To do this you'll need to update the core app file in www/public_html/js and change the following code with your projects information:

```bash
var config = {
    apiKey: '<your-api-key>',
    authDomain: '<your-auth-domain>',
    databaseURL: '<your-database-url>',
    storageBucket: '<your-storage-bucket>'
  };
```

### Install Bower Components
Go to project folder and run the bower install command;

```bash
bower install
```

