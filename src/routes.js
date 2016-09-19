export default routesConfig;

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/register');

  $stateProvider
    .state('landing', {
      abstract: true,
      url: '',
      templateUrl: 'app/layout/landing.html',
    })
    .state('landing.login', {
      url: '/login',
      controller: 'login',
      templateUrl: 'app/login/login.html',
      controllerAs: 'loginCtrl'
    })
    .state('landing.registration', {
      url: '/register',
      controller: 'registration',
      templateUrl: 'app/registration/registration.html',
      controllerAs: 'registrationCtrl'
    })
    .state('app', {
      abstract: true,
      url: '/app',
      templateUrl: 'app/layout/landing_home.html',
    })
    .state('app.home', {
      url: '/home',
      controller: 'home',
      templateUrl: 'app/home/home.html',
      controllerAs: 'homeCtrl'
    });
}
