export default routesConfig;

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/home',
      controller: 'home',
      templateUrl: 'app/home/home.html',
      controllerAs: 'homeCtrl'
    })
    .state('login', {
      url: '/login',
      controller: 'login',
      templateUrl: 'app/login/login.html',
      controllerAs: 'loginCtrl'
    })
    .state('registration', {
      url: '/register',
      controller: 'registration',
      templateUrl: 'app/registration/registration.html',
      controllerAs: 'registrationCtrl'
    });
}
