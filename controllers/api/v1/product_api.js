const Product = require('../../../models/product_db');

module.exports.index = async function(req, res){
    console.log("/products")

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
    console.log("product/create");

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
