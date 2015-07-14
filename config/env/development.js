var port = 1987;

module.exports = {
	port: port,
	db: 'mongodb://localhost/todos',
	facebook: {
		clientID: '893088580762529',
		clientSecret: 'f1e50784e83d6aec50b9bc22a5039f44',
		callbackURL: 'http://localhost:'+ port +'/oauth/facebook/callback'
	},
};
