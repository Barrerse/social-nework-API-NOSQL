const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/connection');

const app = express();

const PORT = process.env.PORT || 3000;

// Connect to MongoDB database
connectDB();

// Parse incoming JSON data
app.use(bodyParser.json());

// Define routes here

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
