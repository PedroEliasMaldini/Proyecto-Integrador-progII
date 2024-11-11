var express = require('express');
var router = express.Router();
const usersController = require('../controllers/usersController')

//Login
router.get('/login', usersController.getlogin);
router.post('/login', usersController.postlogin);

// Registro
router.get('/register', usersController.getRegister);
router.post('/register', usersController.postRegister);

module.exports = router;
