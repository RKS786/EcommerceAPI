
// Require the Product model
const Product = require('../../../models/product_db');

// Controller function to retrieve all products
module.exports.index = async function(req, res){

    try {
        // Fetch all products from the database
        let products = await Product.find({});

        // Respond with a JSON object containing the product data
        return res.status(200).json({
            data: {
                products: products
            },
            message: "Product list"
        });
    } catch (error) {
        // If an error occurs during the process, return a 500 response with the error message
        return res.status(500).json({
            error: error.message
        });
    }
};

// Controller function to create a new product
module.exports.create = async function(req, res){

    try {
        // Create a new product based on the request body
        let newProduct = await Product.create({
            name: req.body.name,
            quantity: req.body.quantity
        });

        // Respond with a JSON object containing the newly created product data
        return res.status(200).json({
            data: {
                product: {
                    name: newProduct.name,
                    quantity: newProduct.quantity
                }
            },
            message: "Product Added"
        });

    } catch (error) {
        // If an error occurs during the process, return a 500 response with the error message
        return res.status(500).json({
            error: error.message
        });
    }
};

// Controller function to delete a product by ID
module.exports.delete = async function(req, res) {
    try {
        // Extract the product ID from the request parameters
        let id = req.params.id;
        
        // Find the product by its ID
        let product = await Product.findById(id);

        // If the product is not found, return a 404 response
        if (!product) {
            return res.status(404).json({
                message: "Product not found!"
            });
        }

        // Delete the product from the database
        let deletedProduct = await product.deleteOne();

        // Respond with a JSON object containing the deleted product data
        return res.status(200).json({
            data: {
                product: {
                    id: deletedProduct.id, // Use the id from the request parameter
                    name: deletedProduct.name,
                    quantity: deletedProduct.quantity
                },
                message: "Product deleted"
            }
        });
    } catch (error) {
        // If an error occurs during the process, return a 500 response with the error message
        return res.status(500).json({
            message: "Internal server error",
            error: error.message
        });
    }
};


// Controller function to update a product by ID
module.exports.update = async function(req, res) {
    try {
        // Extract the new quantity value from the request query
        const updateQuantity = req.query.number;

        // Extract the product ID from the request parameter
        const id = req.params.id;

        // Find the product by its ID
        let product = await Product.findById(id);

        // If the product is not found, return a 404 response
        if (!product) {
            return res.status(404).json({
                message: "Product not found!"
            });
        }

        // Update the quantity of the product
        product.quantity = updateQuantity;

        // Save the updated product to the database
        let updatedProduct = await product.save();

        // Respond with a JSON object containing the updated product data
        return res.status(200).json({
            data: {
                product: {
                    id: updatedProduct.id,
                    name: updatedProduct.name,
                    quantity: updatedProduct.quantity
                },
                message: "Product updated"
            }
        });
    } catch (error) {
        // If an error occurs during the process, return a 500 response with the error message
        return res.status(500).json({
            message: "Internal server error",
            error: error.message
        });
    }
};
