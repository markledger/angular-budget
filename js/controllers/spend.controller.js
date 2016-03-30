


budgetApp.controller('spendCtrl',   ['$scope', '$routeParams', 'spendService',
	function($scope, $routeParams, spendService){

	$scope.init = function(){
		$scope.reset();
		$scope.getAll();
	}

	$scope.create = function(){
		console.log($scope.spend);
		spendService.create($scope.spend);
	}

 	$scope.reset = function(spendForm) {
 		if(spendForm){
	    	spendForm.$setPristine();
	    	spendForm.$setUntouched();
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
