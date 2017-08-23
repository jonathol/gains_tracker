angular.module('gainsTracker')
.controller('ExercisesCtrl', [
  '$scope',
  '$state',
  'workouts',
  'workout',
  'Auth',
  function($scope, $state, workouts, workout, Auth) {
    $scope.workout = workout;
    Auth.currentUser().then(function (user){

      $scope.user = user;
    });
    
    if (!$scope.user || $scope.user.id !== workout.user_id) {
      $state.go("home");
    }

    $scope.filterByUser = function(el) {
      if($scope.user){
        return el.user_id === $scope.user.id ? true : false;
      }
      else {
        return false;
      }
    }

    $scope.addWorkout = function(){
      if(!$scope.name || $scope.name === '') { return; }
      workouts.create({
        name: $scope.name,
        date: $scope.date,
        notes: $scope.notes,
        length: $scope.length,
      });
      $scope.name = '';
      $scope.date = '';
      $scope.notes = '';
      $scope.length = '';
    };


  }]
);
