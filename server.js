var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/node_modules'));

require('./app/routes')(app); // configure our routes

app.listen(3000, function () {
  console.log('tanuki listening on port 3000!');
});

exports = module.exports = app;
