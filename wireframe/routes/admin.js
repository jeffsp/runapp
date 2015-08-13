var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('admin', { title: 'Admin' });
});

router.get('/users', function(req, res, next) {
  res.render('admin-users', { title: 'Admin Users' });
});

router.get('/messages', function(req, res, next) {
  res.render('admin-messages', { title: 'Admin Messages' });
});

module.exports = router;
