var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    console.log('logging out')
    req.logout();
    console.log('destroying session')
    req.session.destroy();
    res.render('logout', { title: 'Logout' });
});

module.exports = router;
