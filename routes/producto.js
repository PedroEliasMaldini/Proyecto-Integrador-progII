var express = require('express');
var router = express.Router();
const productoController = require('../controllers/productoController');
const authMiddleware = require('../middlewares/authMiddleware'); // Importar middlewares de autenticación

/* GET users listing. */
router.get('/search-results', productoController.search);

// Proteger las rutas de agregar producto con ensureLoggedIn
router.get('/product-add', authMiddleware.ensureLoggedIn, productoController.add);
router.post('/add', authMiddleware.ensureLoggedIn, productoController.addeado);

module.exports = router;
