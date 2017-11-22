const moduleName = 'myApp';

import Angular from 'angular';
import AngularCookies from 'angular-cookies';
import AngularResource from 'angular-resource';
import AngularRoute from 'angular-route';
import AppRoutes from './app.routes';
import AppRun from './app.run';
import FirebaseServices from './services/firebase';

// Features
import Auth from './features/auth';
import Home from './features/home';

const dependencies = [
    AngularCookies,
    AngularResource,
    AngularRoute,
    FirebaseServices,
    // Features
    Auth,
    Home
];

export default Angular
        .module(moduleName, dependencies)
        .config(AppRoutes)
        .run(AppRun)
        .name;