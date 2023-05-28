const express = require('express');
const transactionController = require('../controllers/transactionController');

const router = express.Router();

router.post('/transaction', transactionController.addTransaction);
router.get('/transaction/:uid', transactionController.getTransaction);
router.post('/payment', transactionController.addPayment);
router.get('/payment', transactionController.getPayment);
router.post('/transaction/update', transactionController.updateTransaction);

module.exports = router;