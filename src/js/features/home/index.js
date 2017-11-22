const moduleName = 'myApp.Home';

import Angular from 'angular';
import HomeRoutes from './home.routes';
import HomeController from './home.controller';

const dependencies = [];

export default Angular
        .module(moduleName, dependencies)
        .controller('HomeController', HomeController)
        .config(HomeRoutes)
        .name;