const express = require('express');
const connectDB = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

// Set up Express.js middleware
// ...

// Test the database connection
app.get('/', (req, res) => {
  if (mongoose.connection.readyState === 1) {
    res.send('Connected to the database!');
  } else {
    res.send('Not connected to the database!');
  }
});

// Set up routes
// ...

// Start the server
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
