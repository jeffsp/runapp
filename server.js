process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express = require('express');
var app = express();
var config = require('./config/config');
var mongojs = require('mongojs');
var db = mongojs('users', ['users']);
var bodyParser = require('body-parser')

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.get('/users', function (req, res) {
    console.log('/users received a get request');
    db.users.find(function(err, docs) {
        if (err != null)
            console.log('error:' + err);
        else
            console.log('db.users.find() success');
        res.json(docs);
    });
});

app.post('/users', function (req, res) {
    console.log('/users received a post request');
    console.log(req.body);
    db.users.insert(req.body, function(err, doc) {
            res.json(doc);
        });
});

app.delete('/users/:id', function (req, res) {
    var id = req.params.id;
    console.log('/users received a delete request for id ' + id);
    db.users.remove({_id: mongojs.ObjectId(id)}, function (err, doc) {
            res.json(doc);
        });
});

app.listen(config.port);
console.log('Server running at http://localhost:' + config.port);
