angular.module('gainsTracker')
.factory('workouts', ['$http', function($http){
  var o = {
    workouts: []
  };
  o.getAll = function() {
    return $http.get('/workouts.json').then(function(data){
      angular.copy(data.data, o.workouts);
    })
  };
  o.create = function(workout) {
    return $http.post('/workouts.json', workout).then(function(data){
      o.workouts.push(data.data);
    });
  };
  o.get = function(id) {
    return $http.get('/workouts/' + id + '.json').then(function(res){
      return res.data;
    });
  };
  
  return o;
}])
