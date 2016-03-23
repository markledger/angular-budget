
budgetApp.controller('budgetController', ['$scope','$http', '$routeParams',
     function($scope, $http, $routeParams, budgetCategoriesDropdown) {
  $scope.master = {};

 $scope.dateOptions = {
    changeYear: true,
    changeMonth: true,
    dateFormat: 'dd/mm/yy'
    };

  var filename = 'js/spends.json';


  if($routeParams.spendId){
     $http.get(filename).success(function(data) {
          $scope.spend = data[$routeParams.spendId];
          $scope.spend.date = new Date(data[$routeParams.spendId].date);
    });
  }

  $scope.update = function(spend) {
  $scope.master = angular.copy(spend);

    if (spend) {
        $http.post("spend/save", spend, config).success(function(){
       });
    }
  };



  $http.get(filename).success(function(data) {
        $scope.currentSpends = data;
  });

  $scope.reset = function() {
     $scope.spend = angular.copy($scope.master);

  };



  }]);


budgetApp.filter('penniesToPounds', function() {
  // In the return function, we must pass in a single parameter which will be the data we will work on.
  // We have the ability to support multiple other parameters that can be passed into the filter optionally
  return function(amount) {
   return amount/100;
  }
});
