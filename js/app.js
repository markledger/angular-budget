var budgetApp = angular.module('budgetApp', [
  'ngRoute',
  'ui.date',
  'ngAnimate',
  'fcsa-number'
  ])
.run(function($rootScope, $route){
  //$rootScope.endPoint = 'http://silex.dev/silex-backend/vendor/app/web';
  $rootScope.endPoint = 'http://spending.dev/silex-backend/vendor/app/web';
  $rootScope.$on("$routeChangeSuccess", function(currentRoute, previousRoute){
    //Change page title, based on Route information
    $rootScope.title = $route.current.title;
  });
});



budgetApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/spending', {
        templateUrl: 'partials/add-spend.html',
        controller: 'spendCtrl',
        title: "Add a spend"
      }).
      when('/spend/:spendId', {
        templateUrl: 'partials/add-spend.html',
        controller: 'spendCtrl',
        title: "Review spend"
      }).
      otherwise({
        redirectTo: '/spending'
      });
  }]);


