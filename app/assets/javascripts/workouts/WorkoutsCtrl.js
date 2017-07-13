angular.module('gainsTracker')
.controller('WorkoutsCtrl', [
  '$scope',
  'workouts',
  function($scope, workouts) {
    $scope.workouts = workouts.workouts;
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
