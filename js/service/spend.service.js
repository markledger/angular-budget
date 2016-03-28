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

	spendService.create = function(spend){
		var defer = $q.defer();

		$http({
			url: $rootScope.endPoint + '/spend/add',
            method: "POST",
            data: spend,
            headers: {'Content-Type': 'application/json'}
			})
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