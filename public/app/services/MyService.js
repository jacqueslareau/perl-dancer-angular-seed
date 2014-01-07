angular.module('app.myService', []);

angular.module('app.myService').provider('MyService', function() {
  
  /**
    This is a service provider.
    You can use the setDefaults function to defined default settings at config.
    We inject $http as an example.
  */
  
  var settings = {};
  
  this.setDefaults = function(defaults) { settings = defaults };

  this.$get = ['$http',function($http) { 
    
    var init = function() {
      /* do stuff */
    };
    
    return {
      init: init
    };
  
  }];
  
});
