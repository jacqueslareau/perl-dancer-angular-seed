/**
  module declaration
  
  We split all of our services, filters and directives into their own modules.
  This will make your stuff easily reusable. We don't split controllers since they don't tend to be
  reusable anyway.
  
  For the sake of this seed, we use app.modulename for module names. If you plan on reuse the modules in
  other project, you probably should use a different naming pattern like: author.modulename
*/

angular.module('app', ['ngRoute', 'app.myService', 'app.myFilter', 'app.myDirective']);

/** 
  module config
  
  Sets the hashPrefix to ! and define basic routes.
  
  If you used the manual bootstrap to load config (view module bootstrap), you can 
  load it here to use in your config.
*/

angular.module('app').config(
['$routeProvider','$locationProvider','$httpProvider', function($routeProvider,$locationProvider,$httpProvider) {

  /** 
    We add the XMLHttpRequest header to all requests. This is to better interact with
    Perl Dancer ajax keyword. In order to know if a request was a ajax request, Dancer
    use this header.
  */
  $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';

  $locationProvider.hashPrefix('!');
  
  $routeProvider
    .when('/', { controller: 'MyController', templateUrl: '/app/partials/index.html' })
    .otherwise({ redirectTo: '/' });

}]);

/** 
  module run
  
  We provide template for the run just in case it's needed. We're injecting http only as an example. 
*/

/* angular.module('app').run(['http',function($http){}]); */

/**
  load data before app
  
  We use this pure angular piece of code to load data before starting our angular application.
  Useful to load config or app wide constants. You also will be able to use the data fetched here in your .config
  section of your app.
  
  This code also bootstraps your app.
*/
/*
(function() {
  var initInjector = angular.injector(['ng']);
  var $http = initInjector.get('$http');
  $http.get('/config').then(
    function (response) {
    
      angular.module('config', []).constant('Config', response.data);

      angular.element(document).ready(function() {
        angular.bootstrap(document, ['app']);
      });
      
    }
  );
})();
*/

/**
  application bootstrap 
  
  We bootstrap the application manually instead of using the ng-app directive.
*/
angular.element(document).ready(function(){
  angular.bootstrap(document, ['app']);
});