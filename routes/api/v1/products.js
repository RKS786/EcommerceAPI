console.log("in route/api/v1/product");

// Import the Express.js framework
const express = require('express');

// Create an instance of the Express router
const router = express.Router();

// Import the product API controller
const productApi = require('../../../controllers/api/v1/product_api');

// Define routes for product API endpoints
router.get('/', productApi.index); // Route to fetch all products
router.post('/create', productApi.create); // Route to create a new product
router.delete('/:id', productApi.delete); // Route to delete a product by ID
router.post('/:id/update_quantity', productApi.update); // Route to update the quantity of a product by ID

// Export the router instance to be used in other parts of the application
module.exports = router;