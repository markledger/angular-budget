budgetApp.service('spendService', function spendService($http, $q, $rootScope){
	var spendService 	    = this;
	spendService.spendList  = {};

	spendService.getAllSpends = function(){
		var defer = $q.defer();
		 
		$http.get('js/spends.json')
		.success(function(response){
			spendService.spendList = response;
			defer.resolve(response);
		})
		.error(function(error, status){
			defer.reject(error);
		})

		return defer.promise;
	}

	spendService.create = function(spendService){
		var defer = $q.defer();

		$http.post($rootScope.endPoint + '/spend/add/', spendService)
		.success(function(response){
			console.log(response);
			defer.resolve(response);
		})
		.error(function(error, status){
			defer.reject(error);
		})

		return defer.promise;
	}

});