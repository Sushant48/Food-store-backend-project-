const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { authenticateUser } = require('../middleware/authMiddleware');

// User registration route
router.post('/register', userController.register);

// User login route
router.post('/login', userController.login);



// User profile route
router.get('/profile', userController.profile);

module.exports = router;
