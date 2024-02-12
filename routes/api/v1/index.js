console.log("in route api v1 index");

// Import the Express.js framework
const express = require('express');

// Create an instance of the Express router
const router = express.Router();

// Mount the '/products' sub-route using the routes defined in the './products' directory
router.use('/products', require('./products'));

// Export the router instance to be used in other parts of the application
module.exports = router;