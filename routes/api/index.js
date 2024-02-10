console.log("in route api index")

//imports the Express.js framework
const express = require('express');

//creates an instance of the Express router
const router = express.Router();

router.use('/v1', require('./v1'));

module.exports = router;