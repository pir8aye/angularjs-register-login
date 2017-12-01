import Angular from 'angular';
import AuthRoutes from './auth.routes';
import AuthRun from './auth.run';
import AuthService from './auth.service';
import FlashService from '../../services/flash';
import LoginController from './login/login.controller';
import ProfileController from './profile/profile.controller';
import RegisterController from './register/register.controller';
import FirebaseService from '../../services/firebase';

import './auth.css';
import './auth.scss';

const dependencies = [FirebaseService, FlashService];

export default Angular
        .module('myApp.AuthFeature', dependencies)
        .controller('LoginController', LoginController)
        .controller('ProfileController', ProfileController)
        .controller('RegisterController', RegisterController)
        .service('AuthService', AuthService)
        .config(AuthRoutes)
        .run(AuthRun)
        .name;