

//service to get stats
angular.module('stats.services', [])
	.service('StatsService', function(){
		this.csvToJson = function(filename){

			//Converter Class 
			var fs = require("fs");
			var Converter = require("csvtojson").Converter;
			// var fileStream = fs.createReadStream("../data_store/current_stats/pitching_starters_probable.csv");
			var fileStream = fs.createReadStream(filename);

			//new converter instance 
			var param = {};
			var converter = new Converter(param);
			var stats;

			//end_parsed will be emitted once parsing finished 
			converter.on("end_parsed", function (jsonObj) {
			   // console.log(jsonObj); //here is your result json object
			   stats = jsonObj;
			   console.log(stats); 
			});

			//read from file 
			fileStream.pipe(converter);
		}
	});

//service to get daily schedule
angular.module('schedule.services', []{
	.service('ScheduleService', function())
});




//injects service into controllers
angular.module('stats.controllers', ['stats.services']));
