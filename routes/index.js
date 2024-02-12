console.log("in route index")

// Import the Express.js framework
const express = require('express');

// Create an instance of the Express router
const router = express.Router();

// Mount the '/api' sub-route using the routes defined in the './api' directory
router.use('/api', require('./api'));

// Export the router instance to be used in other parts of the application
module.exports = router;