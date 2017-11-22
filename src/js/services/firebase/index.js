const moduleName = 'myApp.Firebase';

import Angular from 'angular';
import AngularFire from 'angularfire';
import FirebaseFactory from './firebase.factory';
import FirebaseUserService from './firebaseUser.service';

const dependencies = ['firebase'];

export default Angular
        .module(moduleName, dependencies)
        .factory('FirebaseFactory', FirebaseFactory)
        .service('FirebaseUserService', FirebaseUserService)
        .name;