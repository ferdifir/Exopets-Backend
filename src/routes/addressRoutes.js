const express = require('express');
const addressController = require('../controllers/addressController');

const router = express.Router();

router.get('/address/:uid', addressController.getAddress);
router.get('/address/:uid/:id', addressController.getAddressById);
router.post('/address', addressController.addAddress);
router.post('/address/delete', addressController.deleteAddress);

module.exports = router;