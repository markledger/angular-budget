budgetApp.controller('spendCtrl',   ['$scope', '$routeParams', 'spendService',  'modalService', '$filter',
	function($scope, $routeParams, spendService, modalService, $filter ){
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
    spend_for_deleting = $filter('getById')($scope.currentSpends, id);

    var modalOptions = {
        closeButtonText: 'Cancel',
        actionButtonText: 'Delete',
        headerText: spend_for_deleting.name + ' (' + $filter('date')(spend_for_deleting.date)  + ')?',
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
