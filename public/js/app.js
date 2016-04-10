// var express = require('express');
// var app = express();
// // var router = express.Router();
// // var path = require('path');


// app.get('/', function (req, res) {
//   res.send('root');
// });
// app.get('/mlb', function (req, res) {
//   res.sendfile('mlb.html');
// });



// var MLBStatsApp = angular.module('MLBStatsApp', []);

angular.module('StatsApp', ['ngRoute', 'appRoutes', 'MainCtrl', 'MLBCtrl', 'MLBStatService']);
