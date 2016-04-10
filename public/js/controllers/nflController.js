var nflApp = angular.module('NFLStats', []);

nflApp.controller('NFLController', [
		'$scope',
		function($scope, ngTableParams){
			$scope.teamStats = [
				{teamName: 'PIT',
				yardsGiven: 500},
				{teamName: 'CHI',
				yardsGiven: 600},
				{teamName: 'NYG',
				yardsGiven: 700},
				{teamName: 'OAK',
				yardsGiven: 701},
				{teamName: 'CLE',
				yardsGiven: 695}
			];

			// $scope.wideRecievers = [
			// 	{playerName: 'Hopkins',
			// 	3Gyards: 300, seasonYards: 500},
			// 	{playerName: 'Green',
			// 	3Gyards: 350, seasonYards: 510},
			// 	{playerName: 'Brown',
			// 	3Gyards: 285, seasonYards: 520},
			// 	{playerName: 'Johnson',
			// 	3Gyards: 290, seasonYards: 520},
			// 	{playerName: 'Edlemen',
			// 	3Gyards: 291, seasonYards: 505}
			// ];


		}

]);