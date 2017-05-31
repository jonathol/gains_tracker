gainsTracker = angular.module('gainsTracker',[
  'templates',
  'ngRoute',
  'controllers',
])

gainsTracker.config(['$routeProvider',
  ($routeProvider)->
    $routeProvider
      .when('/',
        templateUrl: "index.html"
        controller: 'MacrosController'
      )
])

controllers = angular.module('controllers', [])
controllers.controller('MacrosController', ['$scope',
  ($scope)->
])
