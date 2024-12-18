const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');
const authMiddleware = require('../middlewares/authMiddleware');

// Login
router.get('/login', authMiddleware.ensureLoggedOut, usersController.getlogin);
router.post('/login', usersController.postlogin);

// Registro
router.get('/register', authMiddleware.ensureLoggedOut, usersController.getRegister);
router.post('/register', usersController.postRegister);

// Logout
router.post('/logout', usersController.logout);

// Perfil
router.get('/profile', authMiddleware.ensureLoggedIn, usersController.profile);

router.get('/view-profile/:id', usersController.viewProfile);

module.exports = router;
