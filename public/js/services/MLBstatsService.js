// MLBStatsApp.factory('MLBStatService', function($http){
// 		var stats = {content:null}
//
// 		$http.get('data/mlb_test.json').success(function(data){
// 			stats.content = data;
// 			console.log(data);
// 		});
//
// 		 return stats;
// });

angular.module('MLBStatService', []).factory('MLBStats', ['$http', function($http) {

    return {
        getMLBStats : function() {
            return $http.get('/api/mlb');
        },
    }
}]);

// //service to get stats from .csv
// angular.module('stats.services', [])
// 	.service('StatsService', function(){
// 		this.csvToJson = function(filename){
//
// 			//Converter Class
// 			var fs = require("fs");
// 			var Converter = require("csvtojson").Converter;
// 			// var fileStream = fs.createReadStream("../data/current_stats/pitching_starters_probable.csv");
// 			var fileStream = fs.createReadStream(filename);
//
// 			//new converter instance
// 			var param = {};
// 			var converter = new Converter(param);
// 			var stats;
//
// 			//end_parsed will be emitted once parsing finished
// 			converter.on("end_parsed", function (jsonObj) {
// 			   // console.log(jsonObj); //here is your result json object
// 			   stats = jsonObj;
// 			   console.log(stats);
// 			});
//
// 			//read from file
// 			fileStream.pipe(converter);
// 		}
// 	});


//service to get daily schedule
