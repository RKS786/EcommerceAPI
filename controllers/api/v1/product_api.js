console.log("in product_api_controller");

module.exports.index = function(req, res){
    console.log("/products")
    return res.status(200).json({
        message: "Product list"
    });
};

module.exports.create = function(req, res){
    console.log("product/create")
    return res.status(200).json({
        message: "Product create"
    });
};
