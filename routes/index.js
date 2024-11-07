var express = require('express');
var router = express.Router();
const indexController = require('../controllers/indexController')

/* GET home page. */
router.get('/', indexController.index);
router.get('/add', indexController.add);
router.get('/detalle/:id', indexController.detalle);

module.exports = router;
