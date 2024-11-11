var express = require('express');
var router = express.Router();
const usersController = require('../controllers/usersController')

/* GET users listing. */
router.get('/login', usersController.login);

// Registro
router.get('/register', usersController.getRegister);
router.post('/register', usersController.postRegister);

module.exports = router;
