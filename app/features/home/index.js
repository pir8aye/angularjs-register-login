import Angular from 'angular';
import HomeRoutes from './home.routes';
import HomeController from './home.controller';
import FirebaseService from '../../services/firebase';
import SocketService from '../../services/socket';

import './home.css';
import './home.scss';

const dependencies = [FirebaseService, SocketService];

export default Angular
        .module('myApp.HomeFeature', dependencies)
        .controller('HomeController', HomeController)
        .config(HomeRoutes)
        .name;