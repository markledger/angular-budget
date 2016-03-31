


budgetApp.controller('spendCtrl',   ['$scope', '$routeParams', 'spendService',
	function($scope, $routeParams, spendService){
	$scope.master = {};
	$scope.quantity = 10;
	$scope.orderBy  = '-date';

	$scope.init = function(form){
		$scope.reset(form);
		
	}

	$scope.create = function(spend){
		$scope.master = angular.copy(spend);	
		spendService.create(spend).then(function(response){
			$scope.getAll();
		}, function(error){
			//error
		});	
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
