angular.module('app.myDirective', []);

angular.module('app.myDirective').directive('myUser', function () {

/**

  You can use this directive like this:
  
  <my-user username="test"></my-user>
  
*/

  return {
    restrict: 'AE',
    scope: {
      username: '=username'
    },
    template: '<p>Welcome, <strong>{{ username }}</strong></p>'
  };
  
});
