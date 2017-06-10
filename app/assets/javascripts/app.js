angular.module('gainsTracker', [
  'ui.router',
  'templates',
  'ng-token-auth',
  'ipCookie'
])
.config([
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'home/_home.html',
        controller: 'MainCtrl'
      })
      .state('register', {
        url: '/register',
        templateUrl: 'auth/_register.html',
        controller: 'AuthCtrl',
      });

    $urlRouterProvider.otherwise('home');
  }
])
