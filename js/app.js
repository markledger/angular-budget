var budgetApp = angular.module('budgetApp', [
  'ngRoute',
  'ui.date',
  'ngAnimate'
  ])
.run(function($rootScope){
  $rootScope.endPoint = 'http://silex.dev/silex-backend/vendor/app/web';
});



budgetApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/spending', {
        templateUrl: 'partials/add-spend.html',
        controller: 'spendCtrl'
      }).
      when('/spend/:spendId', {
        templateUrl: 'partials/add-spend.html',
        controller: 'spendCtrl'
      }).
      otherwise({
        redirectTo: '/spending'
      });
  }]);


