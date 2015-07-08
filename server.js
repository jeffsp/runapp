process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express = require('./config/express');
var app = express();

app.get('/', function (req, res) {
    res.send('Hello from server.js');
});

app.listen(config.port);
console.log('Server running at http://localhost:{0}/'.format(config.port));
