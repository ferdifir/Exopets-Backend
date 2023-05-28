const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser);
router.put('/edit', userController.editUser);
router.get('/admin', userController.getAdmin);
router.post('/report', userController.addReport);
router.get('/report', userController.getReport);

module.exports = router;
