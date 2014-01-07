angular.module('app.myFilter', []);

angular.module('app.myFilter').filter('checkmark', function() {
  return function(input) {
    return input ? '\u2713' : '\u2718';
  };
});