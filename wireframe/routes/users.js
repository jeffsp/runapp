var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('users', { title: 'Users' });
});

router.route('/:id')
    .get(function(req, res) {
            console.log('Called users read')
            res.json(req.id);
        })
    .put(function(req, res, next) {
            console.log('Called users update')
            res.json(req.id);
        })
    .delete(function(req, res, next) {
            console.log('Called users del')
            res.json(req.id);
        });

router.param('id', function(req, res, next, id) {
            console.log('Called users getID')
            req.id = id;
            next();
        });

module.exports = router;
