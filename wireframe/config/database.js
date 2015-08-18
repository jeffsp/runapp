var mongoose = require('mongoose');

var db_name = 'wireframe';
console.log('connecting to database "'+db_name+'"')
mongoose.connect('localhost', db_name);
