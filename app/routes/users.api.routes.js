module.exports = function(app) {
    app.get('/api/users', function (req, res) {
        console.log('/api/users received a get request');
        db_mongojs.users.find(function(err, docs) {
            if (err != null)
                console.log('error:' + err);
            else
                console.log('db_mongojs.users.find() success');
            res.json(docs);
        });
    });

    app.post('/api/users', function (req, res) {
        console.log('/api/users received a post request');
        console.log(req.body);
        db_mongojs.users.insert(req.body, function(err, doc) {
                res.json(doc);
            });
    });

    app.delete('/api/users/:id', function (req, res) {
        var id = req.params.id;
        console.log('/api/users received a delete request for id ' + id);
        db_mongojs.users.remove({_id: mongojs.ObjectId(id)}, function (err, doc) {
            if (err != null)
                console.log('error:' + err);
            else
                console.log('db_mongojs.users.remove() success');
            res.json(doc);
        });
    });

    app.get('/api/users/:id', function (req, res) {
        var id = req.params.id;
        console.log('/api/users received a get request for id ' + id);
        db_mongojs.users.findOne({_id: mongojs.ObjectId(id)}, function (err, doc) {
            res.json(doc);
        });
    });

    app.put('/api/users/:id', function (req, res) {
        var id = req.params.id;
        console.log('/api/users received a put request for id ' + id);
        db_mongojs.users.findAndModify({
            query: {_id: mongojs.ObjectId(id)},
            update: {$set: {name: req.body.name, email: req.body.email, city: req.body.city}},
            new: true}, function (err, doc) {
                res.json(doc);
            });
    });
};
