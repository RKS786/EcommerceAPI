console.log("in route index")

//imports the Express.js framework
const express = require('express');

//creates an instance of the Express router
const router = express.Router();

router.use('/api', require('./api'));


module.exports = router;