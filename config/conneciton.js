const mongoose = require('mongoose');
const connectionStringURI = `mongodb://localhost:27017/social-network-API`

mongoose.connect(connectionStringURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Log MongoDB queries being executed
mongoose.connection.once("open",()=>{
  console.log("Connected to MongoDB!!!");
})
mongoose.set('debug', true);

// Export the Mongoose connection object
module.exports = mongoose.connection;
