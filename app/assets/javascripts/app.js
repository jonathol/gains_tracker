angular.module('gainsTracker', ['ui.router', 'templates', 'Devise'])
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
      .state('signin', {
        url: '/signin',
        templateUrl: 'auth/_signin.html',
        controller: 'AuthCtrl',
        onEnter: ['$state', 'Auth', function($state, Auth) {
          Auth.currentUser().then(function (){
            $state.go('home');
          })
        }]
      })
      .state('register', {
        url: '/register',
        templateUrl: 'auth/_register.html',
        controller: 'AuthCtrl',
        onEnter: ['$state', 'Auth', function($state, Auth) {
          Auth.currentUser().then(function (){
            $state.go('home');
          })
        }]
      })
      .state('calc', {
        url: '/calc',
        templateUrl: 'calc/_calc.html',
        controller: 'CalcCtrl'
      })
      .state('workout', {
        url: '/workout',
        templateUrl: 'workout/_workout.html',
        controller: 'WorkoutCtrl'
      });

    $urlRouterProvider.otherwise('home');
  }
])
