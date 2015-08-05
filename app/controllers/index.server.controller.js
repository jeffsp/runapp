exports.render = function(req, res) {
	console.log('In Index Render')
    res.render('index', {
        title: 'Run app',
        user: req.user ? req.user.username : ''
    });
};
