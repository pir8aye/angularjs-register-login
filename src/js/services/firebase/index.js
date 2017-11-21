const moduleName = 'myApp.Firebase';

import Angular from 'angular';
import Firebase from 'firebase';
import AngularFire from 'angularfire';
import FirebaseService from './firebase.service';

const dependencies = ['firebase'];

export default Angular
        .module(moduleName, dependencies)
        .factory('Firebase', FirebaseService)
        .name;