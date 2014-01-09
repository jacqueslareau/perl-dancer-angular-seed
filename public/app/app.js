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
  module bootstrap 
  
  We bootstrap the application manually instead of using the ng-app directive.
  This it so we can load stuff, using jQuery, before starting the angular app.
  
  Suppose you need a constant that contains configuration variables unique to
  all users of your app. By fetching it before initiating your app will let you use
  this data in the config portion of your app.
*/

angular.element(document).ready(function(){
  
  /*
  $.getJSON('/config', function (data) {
    angular.module('app').constant('Config', data);
    angular.bootstrap(document, ['app']);
  });
  */
  
  angular.bootstrap(document, ['app']);
  
});