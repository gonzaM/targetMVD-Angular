import angular from 'angular';
// Controllers
import { LoginController } from './app/login/login.controller';
import { RegistrationController } from './app/registration/registration.controller';
// Services
// import {Example} from './app/services/example';
import { Users } from './app/services/users.service';
import { AuthenticationService } from './app/services/authentication.service';
import { AuthInterceptor } from './app/components/auth.interceptor';

import { localStorageServiceProvider } from '../node_modules/angular-local-storage/dist/angular-local-storage.js';
import 'angular-ui-router';
import routesConfig from './routes';

import './index.scss';


export const app = 'app';

angular
  .module(app, ['ui.router', 'LocalStorageModule'])
  .config(routesConfig)
  .controller('login', LoginController)
  .controller('registration', RegistrationController)
  .service('UsersService', Users)
  .service('AuthenticationService', AuthenticationService)
  .service('AuthInterceptor', AuthInterceptor)
  .constant('ENV', {
    'API_ENDPOINT': 'http://localhost:3002/api/v1'
  })
  .config(function (localStorageServiceProvider) {
    localStorageServiceProvider
      .setPrefix('targetmvd')
      .setStorageType('sessionStorage')
  });
  // .config(function($httpProvider){
  //   $httpProvider.interceptors.push('AuthInterceptor');
  // });


