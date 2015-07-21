exports.render = function(req, res) {
    res.render('search', {
    	title: 'Search Results',
    	user: req.user ? req.user.username : '',
    	query: req.query.q
    });
};
