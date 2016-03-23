budgetApp.directive('budgetCategoriesDropdown', function() {
  return {
    restrict: 'EA',
    scope: {
      'chosencategory' : '='
    },
    controller:function ($scope, $http) {
      $http.get('js/categories.json')
        .success(function(data) {
          $scope.categories = data;
      });

    },
    template: '<select class="form-control" ng-model="chosencategory" ng-options="category.name for category in categories track by category.id" ><option value="">Please select one</option></select>'
  }
});


