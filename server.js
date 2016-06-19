//requires
var express = require('express');
path = require('path');

var app = express();
port = process.env.PORT || 3000;

var request=require("request");

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
    var date = new Date();
    day = date.getDate();
    month = date.getMonth() + 1;

    //TODO change to db call
    request.get('http://gd2.mlb.com/components/game/mlb/year_2016/month_0'+ month +'/day_' + day +'/master_scoreboard.json',function(error,response,body){
               if(error){
                     console.log(error);
               }else{
                     console.log(response);
             }
    });
});
app.get('/api/tomorrow-info', function(req, res) {
    var date = new Date();
    day = date.getDate();
    month = date.getMonth() + 1;

    //TODO change to db call
    request.get('http://gd2.mlb.com/components/game/mlb/year_2016/month_0'+ month +'/day_' + day +'/master_scoreboard.json',function(error,response,body){
               if(error){
                     console.log(error);
               }else{
                     console.log(response);
             }
    });
});

var server = app.listen(port, '127.0.0.1', function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log('sports-stax listening at://%s:%s', host, port);
});
