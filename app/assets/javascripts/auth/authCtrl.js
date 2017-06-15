angular.module('gainsTracker')
.controller('AuthCtrl', [
'$scope',
'$state',
'Auth',
function($scope, $state, Auth){
  $scope.signin = function() {
    debugger
    Auth.login($scope.user).then(function(){
      $state.go('home');
    });
  };

  $scope.register = function() {
    Auth.register($scope.user).then(function(){
      $state.go('home');
    });
  };
}]);
