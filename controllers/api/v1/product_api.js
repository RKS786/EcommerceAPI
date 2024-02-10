const Product = require('../../../models/product_db');

module.exports.index = async function(req, res){

    try {
        let products = await Product.find({});

        return res.status(200).json({
            data: {
                products: products
            },
            message: "Product list"
        });
    } catch (error) {
        return res.status(500).json({
            error: error.message
        });
    }
};

module.exports.create = async function(req, res){

    try {
        let newProduct = await Product.create({
            name: req.body.name,
            quantity: req.body.quantity
        });

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
        return res.status(500).json({
            error: error.message
        });
    }
};

module.exports.delete = async function(req, res) {
    try {
        let id = req.params.id;
        let product = await Product.findById(id);

        if (!product) {
            return res.status(404).json({
                message: "Product not found!"
            });
        }

        let deletedProduct = await product.deleteOne();

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
        return res.status(500).json({
            message: "Internal server error",
            error: error.message
        });
    }
};


module.exports.update = async function(req, res) {
    try {
        const updateQuantity = req.query.number; // New quantity value from the request query

        const id = req.params.id; // Product ID from the request parameter

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

        // Return the updated product in the response
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
        // If an error occurs during the update process, return a 500 response with the error message
        return res.status(500).json({
            message: "Internal server error",
            error: error.message
        });
    }
};
