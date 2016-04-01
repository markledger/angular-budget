budgetApp.directive('budgetCategoriesDropdown', ['$rootScope', '$q', function($rootScope, $q) {
  return {
    restrict: 'EA',
    scope: {
      'chosencategory' : '='
    },
    require: '^form',
    template: '<select class="form-control" ng-model="chosencategory" name="category" required="" ng-options="category.id as category.name for category in categories" ><option value="">Please select one</option></select><div ng-show="form.$submitted || form.category.$touched"><div ng-show="form.category.$error.required">Select a category</div></div>',

    link: function(scope, element, attrs, formCtrl) {
      scope.form = formCtrl;
      scope.$watch('chosencategory', function(){
        if(scope.form.category.$viewValue === null){
          scope.form.category.$error.required = true;
        }
      })

    },
    controller:function ($scope, $http) {
      var defer = $q.defer();
      $http({
        url: $rootScope.endPoint + '/categories/all',
              method: "GET",
        })
      .success(function(response){
        $scope.categories = response;
        defer.resolve(response);
      })
      .error(function(error, status){
        defer.reject(error);
      })
    }

  }
}]);


