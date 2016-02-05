



function csvFileToJson(filename){

	var stats;

	//Converter Class 
	var fs = require("fs");
	var Converter = require("csvtojson").Converter;
	// var fileStream = fs.createReadStream("../data/current_stats/pitching_starters_probable.csv");
	var fileStream = fs.createReadStream(filename);

	//new converter instance 
	var param = {};
	var converter = new Converter(param);


	//end_parsed will be emitted once parsing finished 
	converter.on("end_parsed", function (jsonObj) {
	   // console.log(jsonObj); //here is your result json object
	   	stats = jsonObj;
		// console.log(jsonObj);
	});

	//read from file 
	fileStream.pipe(converter);
	console.log(stats);
}

// MUST RETURN A JSON OBJECT!!
var playerStats = csvFileToJson("../data/current_stats/pitching_starters_probable.csv");
console.log(playerStats);