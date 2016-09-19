import angular from 'angular';
// Controllers
import { LoginController } from './app/login/login.controller';
import { RegistrationController } from './app/registration/registration.controller';
import { HomeController } from './app/home/home.controller';
// Services
import { Users } from './app/services/users.service';
import { AuthenticationService } from './app/services/authentication.service';
import { AuthInterceptor } from './app/config/auth.interceptor';
// Filters
import { getErrorMessages } from './app/filters/getErrorsMessages.filter';

import { localStorageServiceProvider } from '../node_modules/angular-local-storage/dist/angular-local-storage.js';
import { match } from '../node_modules/angular-validation-match/dist/angular-validation-match.js';

import 'angular-ui-router';
import routesConfig from './routes';

import './index.scss';


export const app = 'app';

angular
  .module(app, ['ui.router', 'LocalStorageModule', 'validation.match'])
  .config(routesConfig)
  .controller('login', LoginController)
  .controller('registration', RegistrationController)
  .controller('home', HomeController)
  .service('UsersService', Users)
  .service('AuthenticationService', AuthenticationService)
  .service('AuthInterceptor', AuthInterceptor)
  .filter('getErrorMessages',  getErrorMessages)
  .constant('ENV', {
    'API_ENDPOINT': 'http://localhost:3002/api/v1'
  })
  .config(function(localStorageServiceProvider){
    localStorageServiceProvider
      .setPrefix('targetmvd')
      .setStorageType('sessionStorage');
  })
  // .config(function($httpProvider){
  //   $httpProvider.interceptors.push('AuthInterceptor');
  // })


