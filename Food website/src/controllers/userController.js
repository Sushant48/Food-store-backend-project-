const User = require('../models/User');
const authService = require('../middleware/authMiddleware');
const bcrypt = require('bcrypt');

exports.register = async (req, res) => {
    try {
        // Extract user data from request body
        const { username, email, password } = req.body;

        // Check if the username or email already exists
        const existingUser = await User.findOne({ $or: [{ username }, { email }] });
        if (existingUser) {
            return res.status(400).json({ message: 'Username or email already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        // Create a new user instance
        const newUser = new User({ username, email, password:hashedPassword });

        // Save the user to the database
        await newUser.save();

        // Generate JWT token for the newly registered user
        const token = authService.generateToken(newUser._id);

        // Return success response with token 
        res.status(201).json({message : "Register successful"});
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

exports.login = async (req, res) => {
    try {
        // Extract login credentials from request body
        const { username, password } = req.body;

        // Find user by username
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(401).json({ message: 'Invalid username' });
        }

        // Check if password is correct
        const isPasswordValid = await bcrypt.compare(password,user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid password' });
        }

        // Generate JWT token for the authenticated user
        const token = authService.generateToken(user._id);

        // Return success response with token
        res.status(200).json({message : "login successful"});
    } catch (error) {
        console.error('Error logging in:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

exports.profile = async (req, res) => {
    try {
        // Extract updated profile data from request body
        const { username, email, password } = req.body;

        // Find the user by ID
        const user = await User.findById(req.user.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Update user data
        if (username) user.username = username;
        if (email) user.email = email;
        if (password) user.password = password;

        // Save the updated user data to the database
        await user.save();

        // Return success response
        res.status(200).json({ message: 'Profile updated successfully' });
    } catch (error) {
        console.error('Error updating profile:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
