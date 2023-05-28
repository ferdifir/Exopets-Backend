const express = require('express');
const adminController = require('../controllers/adminController');

const router = express.Router();

router.post('/login', adminController.login);
router.get('/admin/:uid', adminController.isAdmin);
router.get('/admin/:uid/product', adminController.getAllProduct);
router.put('/admin/:uid/product/:pid', adminController.approveProduct);
router.delete('/admin/:uid/product/:pid', adminController.deleteProduct);
router.get('/admin/:uid/user', adminController.getAllUser);
router.delete('/admin/user/:uid', adminController.deleteUser);
router.get('/admin/:uid/transaction', adminController.getTransactions);

module.exports = router;