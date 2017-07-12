angular.module('gainsTracker')
.controller('WorkoutCtrl', [
  '$scope',
  function($scope) {
    $scope.addWorkout = function(){
      if(!$scope.workout || $scope.workout === '') { return; }
      workout.create({
        workout: $scope.workout,
        date: $scope.date,
        notes: $scope.notes,
        length: $scope.length,
      });
      $scope.workout = '';
      $scope.date = '';
      $scope.notes = '';
      $scope.length = '';
    };


  }]
);
