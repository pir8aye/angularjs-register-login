// Initialise Firebase
var config = {
    apiKey: "AIzaSyDTs23PtJwxkRE59yPn25nx_26_J1y9eYQ",
    authDomain: "angularjs-register-login.firebaseapp.com",
    databaseURL: "https://angularjs-register-login.firebaseio.com",
    storageBucket: "angularjs-register-login.appspot.com",
};
firebase.initializeApp(config);

// Initialise angular
var myApp = angular.module("myApp", ["firebase", "ngCookies", "ngResource", "ngRoute"]);