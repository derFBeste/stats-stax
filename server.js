//requires
var express = require('express');
    path = require('path');

var app = express();
    port = 3000;
// var router = express.Router();
app.use(express.static(__dirname + '/public'));
var public_dir = './public/';

app.get('/', function (req, res) {
  res.sendfile(public_dir + 'mlb.html');
});
app.get('/mlb', function (req, res) {
  res.sendfile(public_dir + 'mlb.html');
});
// app.get('/nfl', function (req, res) {
//   res.sendfile(public_dir + 'nfl.html');
// });

var server = app.listen(port, '127.0.0.1', function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('sports-stax listening at://%s:%s', host, port);
});
