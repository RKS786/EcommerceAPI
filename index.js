const express = require('express');

const app = express();

const port = 9999;
// Import the Mongoose connection object from the mongoose.js file in the config directory
const db = require('./config/mongoose');

// Middleware to parse incoming form data with 'urlencoded' payloads
// This enables handling of form submissions and populates 'req.body' with the parsed data.
app.use(express.urlencoded());

// Use express router defined in the 'routes' module
app.use('/', require('./routes'));

app.listen(port,function(err){
    if(err){
        console.log('Error in running server',err);
    }

    console.log("My Express server is working fine");
})