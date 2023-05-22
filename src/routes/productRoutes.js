const express = require('express');
const productController = require('../controllers/productController');

const router = express.Router();

router.get('/product/:uid', productController.getAllProducts);
router.get('/product/:uid/:pid', productController.getProductById);

module.exports = router;