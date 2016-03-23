var budgetApp = angular.module('budgetApp', [])

budgetApp.controller('budgetController', function($scope, $http) {

    //get the categories
    $http.get('js/categories.json')
    .success(function(data) {
      console.log(data);
        $scope.categories = data;
    });


  });
