console.log("in route api index")

//imports the Express.js framework
const express = require('express');

//creates an instance of the Express router
const router = express.Router();

// Mount the '/v1' sub-route using the routes defined in the './v1' directory
router.use('/v1', require('./v1'));

// Export the router instance to be used in other parts of the application
module.exports = router;