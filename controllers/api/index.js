const express = require('express');
const router = express.Router();

// Import the individual route files
const postRoutes = require('./postRoutes');  // Assuming postRoutes exists
const userRoutes = require('./userRoutes');  // If you have user-related routes

// Add route imports for any other routes you need
// Define the '/api' route and others as needed
router.use('/posts', postRoutes);  // For posts
router.use('/users', userRoutes);  // For users (if applicable)

module.exports = router;
