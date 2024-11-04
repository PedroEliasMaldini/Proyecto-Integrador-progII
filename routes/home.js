const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController')

router.get('/', homeController.index);
router.get('/detalle/:id', homeController.detalle);
router.get('/create', homeController.create);
router.get('/marca/:marca', homeController.filtrado);

module.exports = router;