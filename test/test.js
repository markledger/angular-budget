

describe ('budgetController', function(){
  var $rootScope,
  $scope,
  $httpBackend,
  controller;

  beforeEach(function(){

    module('budgetApp');

    inject(function($injector){
      $rootScope   = $injector.get('$rootScope');
      $scope       = $rootScope.$new();
      $httpBackend = $injector.get('$httpBackend');
      controller   = $injector.get('$controller')("budgetController", {$scope:$scope});
    });

  });



   describe("spend should get spends using  XHR", function(){
    it("get them spends", function(){
      expect($scope.currentSpends).toBeUndefined();
       var response = '[{"id":0,"name":"Laracasts","amount":"998","date":"2016-03-05T00:00:00.000Z","category":"2"},{"id":1,"name":"Shopping (Aldi)","amount":"3885","date":"23/07/81","category":"1"},{"id":2,"name":"Shopping (Sainsburys)","amount":"2545","date":"24/07/2014","category":"1"},{"id":3,"name":"Petrol","amount":"4398","date":"21/03/2016","category":"5"},{"id":4,"name":"Swimming","amount":"620","date":"20/03/2016","category":"5"},{"id":5,"name":"Beer","amount":"320","date":"20/03/2016","category":"1"},{"id":6,"name":"Coffee","amount":"285","date":"20/03/2016","category":"1"},{"id":7,"name":"Pasty","amount":"280","date":"19/03/2016","category":"1"},{"id":8,"name":"Help","amount":"25.32","date":"2016-03-22T00:00:00.000Z","category":{"id":1,"name":"Eating Out"}}]';
       $httpBackend.expect('GET' , 'js/spends.json').respond(200, response);
       $httpBackend.flush();
       expect($scope.currentSpends.length).toBe(9);
    });
  });

   describe("Budget Controller Initialisation", function(){
    it("$scope.master should be empty", function(){
      var x = {};
      expect($scope.master).toEqual(x);
    });
  });


});
