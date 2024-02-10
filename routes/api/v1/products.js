console.log("in route/api/v1/product");

//imports the Express.js framework
const express = require('express');

//creates an instance of the Express router
const router = express.Router();

const productApi = require('../../../controllers/api/v1/product_api');

router.get('/', productApi.index);
router.post('/create', productApi.create);
router.delete('/:id', productApi.delete);

router.post('/:id/update_quantity', productApi.update);

module.exports = router;