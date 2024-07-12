const express = require('express');
const app = express();
const indexRoute = require('./routes/index-router');
const path = require('path');
const db = require('./config/mongodb-connection');
const PORT = process.env.PORT || 3000; // Use the port from environment variables or default to 3000


// Create configuration
require('dotenv').config();

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use the index router for the root path
app.use('/', indexRoute);

// Start the server and listen on the specified port
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
