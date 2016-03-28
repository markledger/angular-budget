


budgetApp.controller('spendCtrl',  
	function($scope, $routeParams, spendService){

	$scope.init = function(){
		$scope.getAll();
		$scope.master = {};

	}

	$scope.create = function(){

		spendService.create($scope.spend);
		
	}

 	$scope.reset = function() {
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

});