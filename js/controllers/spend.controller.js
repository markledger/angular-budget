budgetApp.controller('spendCtrl',   ['$scope', '$routeParams', 'spendService',  'modalService',
	function($scope, $routeParams, spendService, modalService ){
 console.log(modalService);
	$scope.master = {};
	$scope.quantity = 10;
	$scope.orderBy  = '-date';

	$scope.init = function(form){
		$scope.reset(form);
		$scope.getAll();
	}

	$scope.create = function(spend){
		spendService.create(spend)
		 .then(function(response){
			$scope.init($scope.form);
		 }, function(error){
			//error
		 });
	}

	$scope.delete = function(id){

    var modalOptions = {
        closeButtonText: 'Cancel',
        actionButtonText: 'Delete',
        headerText: 'Delete ' + id + '?',
        bodyText: 'Are you sure you want to delete this spend?'
    };


		modalService.showModal({}, modalOptions).then(function (result) {
			spendService.delete(id)
			 .then(function(response){
				$scope.getAll();
			 }, function(error){
				//error
			 });
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
