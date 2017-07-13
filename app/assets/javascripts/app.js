angular.module('gainsTracker', ['ui.router', 'templates', 'Devise'])
.config([
  '$qProvider',
  function($qProvider) {
     $qProvider.errorOnUnhandledRejections(false);
  }
])
.config([
  '$stateProvider',
  '$urlRouterProvider',

  function($stateProvider, $urlRouterProvider) {


    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'home/_home.html',
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
      .state('workouts', {
        url: '/workouts',
        templateUrl: 'workouts/_workouts.html',
        controller: 'WorkoutsCtrl',
        resolve: {
          workoutPromise: ['workouts', function(workouts) {
            return workouts.getAll();
          }]
        }
      });

    $urlRouterProvider.otherwise('home');
  }
])
