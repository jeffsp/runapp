process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express = require('express');
var app = express();
var config = require('./config/config');

app.use(express.static(__dirname + '/public'));

app.get('/users', function (req, res) {
    console.log('/users received a get request');

    user1 = {
        name: 'name1',
        email: 'email1',
        city: 'city1',
    };
    user2 = {
        name: 'name2',
        email: 'email2',
        city: 'city2',
    };
    user3 = {
        name: 'name3',
        email: 'email3',
        city: 'city3',
    };

    var user_list = [user1, user2, user3];

    res.json(user_list);
});

app.listen(config.port);
console.log('Server running at http://localhost:' + config.port);
