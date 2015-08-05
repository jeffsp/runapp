var users = require('../../app/controllers/users.server.controller'),
    passport = require('passport');

module.exports = function(app) {

    app.route('/users')
        .post(users.create)
        .get(users.list);

    app.route('/users/:userId')
        .get(users.read)
        .put(users.update)
        .delete(users.delete);


    app.param('userId', users.userByID);

    app.param('username', users.userByUserName);

    app.route('/register')
        .get(users.renderRegister)
        .post(users.register);

    app.route('/login')
        .get(users.renderLogin)
        .post(passport.authenticate('local', {
            successRedirect: '/',
            failureRedirect: '/login',
            failureFlash: true
        }));

    app.route('/profile/:username')
        .get(users.renderProfile);

    app.route('/messages')
        .get(users.renderMessages);

    app.get('/logout', users.logout);

    app.get('/oauth/facebook', passport.authenticate('facebook', {
        failureRedirect: '/login',
        scope:['email']
    }));

    app.get('/oauth/facebook/callback', passport.authenticate('facebook', {
        failureRedirect: '/login',
        successRedirect: '/',
        scope:['email']
    }));
};
