var config = require('./config'),
    mongoose = require('mongoose');

module.exports = function() {
    console.log('Connecting to', config.db);
    var db = mongoose.connect(config.db);
    require('../app/models/user.server.model');
    return db;
};
