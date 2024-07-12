const mongoose = require('mongoose');

// Connect to MongoDB using the URI from environment variables
mongoose.connect(process.env.MONGO_DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('Mongoose connection established successfully');
})
.catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});

// Export the Mongoose connection
module.exports = mongoose.connection;