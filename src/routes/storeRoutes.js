const express = require('express');
const storeController = require('../controllers/storeController');

const router = express.Router();

router.post('/create', storeController.createStore);
router.get('/store/:uid', storeController.getStoreByUid);
router.post('/update', storeController.updateStore);

module.exports = router;