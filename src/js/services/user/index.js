const moduleName = 'myApp.UserService';

import Angular from 'angular';
import UserService from './user.service';

const dependencies = [];

export default Angular
        .module(moduleName, dependencies)
        .service('UserService', UserService)
        .name;