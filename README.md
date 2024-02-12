# Ecommerce API
This is a simple Express.js application that provides RESTful API endpoints for managing products.

# Setup
1. Clone the repository to your local machine(https://github.com/RKS786/EcommerceAPI).
2. Install the required dependencies by running npm install.
3. Set up your MongoDB database and configure the connection in the product_db.js file inside the models directory.
4. Start the server by running npm start.

# Usage
# Endpoints
1. GET /api/v1/products
Fetches all products from the database.

2. POST /api/v1/products/create
Creates a new product. Requires a JSON body with name and quantity fields.

3. DELETE /api/v1/products/:id
Deletes a product by its ID.

4. POST /api/v1/products/:id/update_quantity
Updates the quantity of a product by its ID. Requires the new quantity value as a query parameter.

# Dependencies
Express.js: Fast, unopinionated, minimalist web framework for Node.js
Mongoose: MongoDB object modeling tool designed to work in an asynchronous environment.

# Contributors
Ranik
