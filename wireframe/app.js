// Load modules
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');
var expressSession = require('express-session');
var mongoStore = require('connect-mongo')(expressSession);
var mongoose = require('mongoose');

// Database
require('./config/database');
require('./models/user');

// Authentication
require('./config/passport')

// Express
var app = express();

// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// Session
var session_options = {
    store: new mongoStore({ mongooseConnection: mongoose.connection }),
    secret: 'paixeH0s',
    cookie: { maxAge: 60000 },
    resave: true,
    saveUninitialized: true,
}

// Look for NODE_ENV in environment
if (app.get('env') === 'production') {
    app.set('trust proxy', 1) // trust first proxy
    session_options.cookie.secure = true // serve secure cookies, requires https
}

app.use(expressSession(session_options));

// Session
app.use(function(req, res, next) {
    var current_session = req.session;
    console.log('req:' + req)
    console.log('req.session:' + req.session)
    if (current_session.views) {
        current_session.views++
    } else {
        current_session.views = 1
        current_session.cookie.expires = 7 * 24 * 3600 * 1000; // Week long cookie
    }
    next();
})

// Routes
var routes = require('./routes/index');
var login = require('./routes/login');
var logout = require('./routes/logout');
var register = require('./routes/register');
var session = require('./routes/session');
var messages = require('./routes/messages');
var profile = require('./routes/profile');
var search = require('./routes/search');
var admin = require('./routes/admin');
var api = require('./routes/api');

app.use('/', routes);
app.use('/login', login);
app.use('/logout', logout);
app.use('/register', register);
app.use('/session', session);
app.use('/messages', messages);
app.use('/profile', profile);
app.use('/search', search);
app.use('/admin', admin);
app.use('/api', api);

// Catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Error handlers

// Development error handler will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// Production error handler, no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
