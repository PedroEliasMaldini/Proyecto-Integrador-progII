var express = require('express');
var router = express.Router();
const productoController = require('../controllers/productoController')

/* GET users listing. */
router.get('/search-results', productoController.search);
router.get('/product-add', productoController.add);
router.post('/add', productoController.addeado);



module.exports = router;
