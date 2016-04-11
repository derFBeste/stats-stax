//Parses csv files to json

// var path = require('path');
// var appDir = path.dirname(require.main.filename);

//Converter Class
var fs = require("fs");
var Converter = require("csvtojson").Converter;
var fileStream = fs.createReadStream("../data/current_stats/pitching_starters_probable.csv");

//new converter instance
var param = {};
var converter = new Converter(param);

//end_parsed will be emitted once parsing finished
converter.on("end_parsed", function (jsonObj) {
   console.log(jsonObj); //here is your result json object
});

//read from file
fileStream.pipe(converter);
