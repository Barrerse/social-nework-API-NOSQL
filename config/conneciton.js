const mongoose = require('mongoose');

// Set up Mongoose connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/social-network-API';
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

// Log MongoDB queries being executed
mongoose.set('debug', true);

// Export the Mongoose connection object
module.exports = mongoose.connection;
