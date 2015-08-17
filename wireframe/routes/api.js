var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('api', { title: 'API' });
});

router.route('/users/:id')
    .get(function(req, res) {
            console.log('Called api/users read')
            res.json(req.id);
        })
    .put(function(req, res, next) {
            console.log('Called api/users update')
            res.json(req.id);
        })
    .delete(function(req, res, next) {
            console.log('Called api/users del')
            res.json(req.id);
        });

router.param('id', function(req, res, next, id) {
            console.log('Called api/users getID' + id)
            req.id = id;
            next();
        });

module.exports = router;
