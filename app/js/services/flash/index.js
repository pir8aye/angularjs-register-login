const moduleName = 'myApp.FlashService';

import Angular from 'angular';
import FlashService from './flash.service';

const dependencies = [];

export default Angular
        .module(moduleName, dependencies)
        .service('FlashService', FlashService)
        .name;