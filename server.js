<<<<<<< HEAD
//requires
var express = require('express');
    path = require('path');

var app = express();
    port = 3000;
// var router = express.Router();

app.use(express.static(path.join(__dirname, 'public')));


app.get('/', function (req, res) {
  res.sendfile('home.html');
});
app.get('/mlb', function (req, res) {
  res.sendfile('mlb.html');
});
app.get('/nfl', function (req, res) {
  res.sendfile('nfl.html');
});


var server = app.listen(port, '127.0.0.1', function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('tanuki app listening at://%s:%s', host, port);
});
=======
var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/node_modules'));

require('./app/routes')(app); // configure our routes

app.listen(3000, function () {
  console.log('tanuki listening on port 3000!');
});

exports = module.exports = app;
>>>>>>> b085bf8a43b18a6eb6d943b8429aa831d1394062
