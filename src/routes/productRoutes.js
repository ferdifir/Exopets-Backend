const express = require('express');
const productController = require('../controllers/productController');

const router = express.Router();

router.get('/product/:uid', productController.getAllProducts);
router.get('/product/:uid/:pid', productController.getProductById);
router.get('/product/:uid/search/:query', productController.searchProduct);
router.post('/product/:uid', productController.addProduct);

module.exports = router;