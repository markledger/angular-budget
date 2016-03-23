var budgetApp = angular.module('budgetApp', [
  'ngRoute',
  'ui.date'
  ]);

budgetApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/spending', {
        templateUrl: 'partials/add-spend.html',
        controller: 'budgetController'
      }).
      when('/spend/:spendId', {
        templateUrl: 'partials/add-spend.html',
        controller: 'budgetController'
      }).
      otherwise({
        redirectTo: '/spending'
      });
  }]);


