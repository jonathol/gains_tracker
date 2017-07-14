angular.module('gainsTracker')
.controller('ExercisesCtrl', [
  '$scope',
  'workouts',
  'workout',
  'Auth',
  function($scope, workouts, workout, Auth) {
    $scope.workout = workout;

    Auth.currentUser().then(function (user){

      $scope.user = user;
    });

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
