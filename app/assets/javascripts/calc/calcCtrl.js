angular.module('gainsTracker')
.controller('CalcCtrl', [
  '$scope',
  function($scope) {
    $scope.units = 'imperial';
    $scope.weight = 0;
    $scope.bfp = 0;

    $scope.answer = 0;

    $scope.calculate = function(units,weight,bfp,level){

      if (units === 'imperial') {
        $scope.lbm = ((100-bfp)/100) * (weight/2.20462);
      }
      else {
        $scope.lbm = ((100-bfp)/100) * weight;
      }
      $scope.bmr = 370 + (21.6 * $scope.lbm);
      $scope.answer = Math.round($scope.bmr*level);
    };


  }]
);
