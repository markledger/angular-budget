


budgetApp.controller('spendCtrl',   ['$scope', '$routeParams', 'spendService',
	function($scope, $routeParams, spendService){
	
	$scope.init = function(){
		$scope.master = {};
		$scope.reset();
		$scope.getAll();
	}

	$scope.create = function(spend){
		$scope.master = angular.copy(spend);
		spendService.create(spend);
		$scope.init();
	}

 	$scope.reset = function(form) {
 		
 		if(form){
	    	form.$setPristine();
	    	form.$setUntouched();
		}
		$scope.spend = angular.copy($scope.master);
    	
  	};

	$scope.getAll= function(){
		spendService.getAllSpends()
		.then(function(response){
			//success
			$scope.currentSpends = spendService.spendList;
		}, function(error){
			//error
		})
	}

	$scope.init();

}]);
