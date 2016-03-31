budgetApp.directive('budgetCategoriesDropdown', function() {
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
      $http.get('js/categories.json')
        .success(function(data) {
          $scope.categories = data;
      });
    }
  }
});


