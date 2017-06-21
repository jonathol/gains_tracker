angular.module('gainsTracker')
.controller('CalcCtrl', [
  '$scope',
  function($scope) {
    $scope.units = "imperial"
    $scope.lbm = ((100 - $scope.bfp)/100) * $scope.weight;
    $scope.bmr = 370 + (21.6 * $scope.lbm);
    $scope.result = function() {
      return $scope.units;
    };
  }]
);
