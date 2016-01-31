//controller

//csvFileToJson("../data_store/current_stats/pitching_starters_probable.csv");
console.log("Yo!");


var mlbApp = angular.module('MLBStats', []);

mlbApp.controller('MLBController', [
		'$scope',
		function($scope, ngTableParams){
			$scope.bestBats = [
				{playerName: 'Harper',
				OPS: 1.71},
				{playerName: 'Gold',
				OPS: 1.074},
				{playerName: 'Cabrera',
				OPS: 1.034},
				{playerName: 'Trout',
				OPS: 1.019},
				{playerName: 'Stanton',
				OPS: 0.952}
			];

			$scope.bestPitchers = [
				{playerName: 'Scherzer',
				WHIP: 0.80},
				{playerName: 'Greinke',
				WHIP: 0.82},
				{playerName: 'deGrom',
				WHIP: 0.92},
				{playerName: 'Hammel',
				WHIP: 0.95},
				{playerName: 'Cueto',
				WHIP: 0.95}
			];


		}

]);