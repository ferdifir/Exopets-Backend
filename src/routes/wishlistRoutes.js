const express = require('express');
const wishlistController = require('../controllers/wishlistController');

const router = express.Router();

router.get('/wishlist/:uid', wishlistController.getWishlist);
router.post('/wishlist', wishlistController.addWishlist);
router.post('/wishlist/delete', wishlistController.deleteWishlist);

module.exports = router;