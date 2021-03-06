var express = require('express');
var router = express.Router();

router.get('/',
    function(req, res, next) {
        res.render('register', { title: 'Register' });
    }
);

router.post('/',
    function(req, res, next) {
        return res.redirect('/');
    }
);

module.exports = router;
