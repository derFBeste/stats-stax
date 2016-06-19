MLBStatsApp.controller('MLBController',  ['$scope', 'MLBStatService', function($scope, MLBStatService, ngTableParams) {
    $scope.bestBats = [];
    $scope.pitcherStats = [];
    $scope.schedule = [];

	getPitcherStats();

	console.log('mlb controller');

	function getPitcherStats(){
		MLBStatService.pitcherStats().get(null,
		function(data){
			console.log(data);
		},
        function(error) {
            console.log("error: " + error);
        });
	}

}]);


// function getCustomers() {
// 	dataFactory.getCustomers()
// 		.then(function (response) {
// 			$scope.customers = response.data;
// 		}, function (error) {
// 			$scope.status = 'Unable to load customer data: ' + error.message;
// 		});
// }
