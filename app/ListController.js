app.controller('ListController', function(DataService, $scope){

	$scope.listData = DataService.data;

	$scope.personClicked = function(){
		$scope.whoClicked = $scope.person.name;
	}

});