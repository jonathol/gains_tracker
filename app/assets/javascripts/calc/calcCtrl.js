angular.module('gainsTracker')
.controller('CalcCtrl', [
  '$scope',
  function($scope) {
    $scope.units = 'imperial';
    $scope.weight = 0;
    $scope.bfp = 0;

    $scope.$watchGroup(['units', 'weight', 'bfp'], function(newVal){
      console.log(newVal);
      if (newVal[0] === 'imperial') {
        $scope.lbm = ((100-newVal[2])/100) * (newVal[1]/2.20462);
      }
      else {
        $scope.lbm = ((100-newVal[2])/100) * newVal[1];
      }
    });




    $scope.bmr = 370 + (21.6 * $scope.lbm);
    $scope.result = function() {

      return $scope.lbm;
    };
  }]
);
