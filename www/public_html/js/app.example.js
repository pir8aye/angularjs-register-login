// Initialise Firebase
var config = {
    apiKey: '<your-api-key>',
    authDomain: '<your-auth-domain>',
    databaseURL: '<your-database-url>',
    storageBucket: '<your-storage-bucket>'
  };
firebase.initializeApp(config);

// Initialise Angular
var myApp = angular.module("myApp", ["firebase", "ngCookies", "ngResource", "ngRoute"]);