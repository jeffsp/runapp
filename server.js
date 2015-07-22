process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express = require('express');
var app = express();
var config = require('./config/config');
var mongojs = require('mongojs');
var db_mongojs = mongojs('users', ['users']);
var bodyParser = require('body-parser')

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.get('/users', function (req, res) {
    console.log('/users received a get request');
    db_mongojs.users.find(function(err, docs) {
        if (err != null)
            console.log('error:' + err);
        else
            console.log('db_mongojs.users.find() success');
        res.json(docs);
    });
});

app.post('/users', function (req, res) {
    console.log('/users received a post request');
    console.log(req.body);
    db_mongojs.users.insert(req.body, function(err, doc) {
            res.json(doc);
        });
});

app.delete('/users/:id', function (req, res) {
    var id = req.params.id;
    console.log('/users received a delete request for id ' + id);
    db_mongojs.users.remove({_id: mongojs.ObjectId(id)}, function (err, doc) {
        if (err != null)
            console.log('error:' + err);
        else
            console.log('db_mongojs.users.remove() success');
        res.json(doc);
    });
});

app.get('/users/:id', function (req, res) {
    var id = req.params.id;
    console.log('/users received a get request for id ' + id);
    db_mongojs.users.findOne({_id: mongojs.ObjectId(id)}, function (err, doc) {
        res.json(doc);
    });
});

app.put('/users/:id', function (req, res) {
    var id = req.params.id;
    console.log('/users received a put request for id ' + id);
    db_mongojs.users.findAndModify({
        query: {_id: mongojs.ObjectId(id)},
        update: {$set: {name: req.body.name, email: req.body.email, city: req.body.city}},
        new: true}, function (err, doc) {
            res.json(doc);
        });
});

app.listen(config.port);
console.log('Server running at http://localhost:' + config.port);
