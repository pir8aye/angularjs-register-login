const moduleName = 'myApp.FirebaseAuth';

import Angular from 'angular';
import AuthRoutes from './auth.routes';
import AuthRun from './auth.run';
import AuthService from './auth.service';
import FlashService from '../../services/flash';
import LoginController from './login/login.controller';
import RegisterController from './register/register.controller';

const dependencies = [FlashService];

export default Angular
        .module(moduleName, dependencies)
        .controller('LoginController', LoginController)
        .controller('RegisterController', RegisterController)
        .service('AuthService', AuthService)
        .config(AuthRoutes)
        .run(AuthRun)
        .name;