exports.render = function(req, res) {
    res.render('index', {
        title: 'Run app',
        user: req.user ? req.user.username : ''
    });
};
