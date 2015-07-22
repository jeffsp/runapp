module.exports = function(app) {
    var admin = require('../controllers/admin.controller');
    app.get('/admin/users', admin.renderUsers);
};
