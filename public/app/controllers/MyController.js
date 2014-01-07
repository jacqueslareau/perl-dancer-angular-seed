angular.module('app')
.controller('MyController',['$scope',function($scope) {

  $scope.sayHello = function() {
    $scope.message = 'Hello world!';
  };

}]);