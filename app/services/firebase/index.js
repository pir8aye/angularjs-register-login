import Angular from 'angular';
import AngularFire from 'angularfire';
import FirebaseFactory from './firebase.factory';
import UserFactory from './user.factory';

const dependencies = ['firebase'];

export default Angular
        .module('myApp.FirebaseService', dependencies)
        .factory('FirebaseFactory', FirebaseFactory)
        .factory('UserFactory', UserFactory)
        .name;