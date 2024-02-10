console.log("in route/api/v1/product");

//imports the Express.js framework
const express = require('express');

//creates an instance of the Express router
const router = express.Router();

const productApi = require('../../../controllers/api/v1/product_api');

router.get('/', productApi.index);
router.post('/create', productApi.create);

module.exports = router;