process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express = require('express');
var app = express();
var config = require('./config/config');

app.use(express.static(__dirname + '/public'));

app.listen(config.port);
console.log('Server running at http://localhost:' + config.port);
