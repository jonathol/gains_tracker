angular.module('gainsTracker')
.controller('CalcCtrl', [
  '$scope',
  function($scope) {
    $scope.result = function() {
      if ($scope.operator == '+') {
        return $scope.a + $scope.b;
      }
      if ($scope.operator == '-') {
        return $scope.a - $scope.b;
      }
      if ($scope.operator == '*') {
        return $scope.a * $scope.b;
      }
      if ($scope.operator == '/') {
        return $scope.a / $scope.b;
      }
    };
  }]
);
