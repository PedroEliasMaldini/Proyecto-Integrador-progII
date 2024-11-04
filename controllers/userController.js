const db = require('../database/models');
const userController = {
    register: function (req, res) {
        res.render('createUser')
    }
        
    };

module.exports = userController