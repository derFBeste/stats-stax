//requires
const express = require('express');
var path = require('path');

const app = express();
var port = process.env.PORT || 3000;

const request=require("request");

//TODO add bodyparser
//TODO update for REACT
//TODO make dev mongo db


// var router = express.Router();
app.use(express.static(__dirname + '/public'));
var public_dir = './public/';

//Routes to serve views
app.get('/', function(req, res) {
    res.sendfile(public_dir + 'index.html');
});
app.get('/mlb', function(req, res) {
    res.sendfile(public_dir + 'mlb.html');
});
app.get('/nfl', function(req, res) {
    res.sendfile(public_dir + 'nfl.html');
});

//Data API
app.get('/api/stats/pitchers', function(req, res) {
    //TODO change to db call
    res.sendfile('data/mlb_test_pitchers.json');
});
app.get('/api/stats/batters', function(req, res) {
    //TODO change to db call
    res.sendfile('data/mlb_test_batters.json');
});
app.get('/api/games', function(req, res) {
    //TODO change to db call
    res.sendfile('data/games_test.json');
});
app.get('/api/today-info', function(req, res) {
    res.sendfile('data/todays_games.json');
});
app.get('/api/tomorrow-info', function(req, res) {

});

var server = app.listen(port, '127.0.0.1', function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log('sports-stax listening at://%s:%s', host, port);
});
