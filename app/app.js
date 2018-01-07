import 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';
import './app.css';
import './app.scss';

import Angular from 'angular';
import AngularCookies from 'angular-cookies';
import AngularEnvironment from 'angular-environment';
import AngularResource from 'angular-resource';
import AngularRoute from 'angular-route';
import AppEnvironment from './app.environment';
import AppRoutes from './app.routes';
import AppRun from './app.run';

// Features
import Auth from './features/auth';
import Home from './features/home';

const dependencies = [
    AngularCookies,
    AngularEnvironment,
    AngularResource,
    AngularRoute,
    // Features
    Auth,
    Home
];

export default Angular
        .module('myApp', dependencies)
        .config(AppEnvironment)
        .config(AppRoutes)
        .run(AppRun)
        .name;