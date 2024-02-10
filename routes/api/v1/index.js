console.log("in route api v1 index");

//imports the Express.js framework
const express = require('express');

//creates an instance of the Express router
const router = express.Router();

router.use('/products', require('./products'));

module.exports = router;