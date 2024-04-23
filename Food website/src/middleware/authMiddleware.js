const jwt = require('jsonwebtoken');
const User = require('../models/User');


exports.generateToken = (userId) => {
    // Create JWT token with user ID and secret key
    const token = jwt.sign(
        { userId },
        process.env.JWT_SECRET,
        { expiresIn: '1h' } // Token expiration time (e.g., 1 hour)
    );
    return token;
};