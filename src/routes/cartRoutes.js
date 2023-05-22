const express = require('express');
const cartController = require('../controllers/cartController');

const router = express.Router();

router.post('/cart', cartController.addToCart);
router.get('/cart/:uid', cartController.getCartByUserId);
router.post('/cart/delete', cartController.deleteCartById);

module.exports = router;