var express = require('express');
var router = express.Router();
const productoController = require('../controllers/productoController')

/* GET users listing. */
router.get('/search-results', productoController.search);
router.get('/product-add', productoController.add);

// router.get('/detalle/:id', usersController.detalle); falta ver como hacer los resultados

module.exports = router;
