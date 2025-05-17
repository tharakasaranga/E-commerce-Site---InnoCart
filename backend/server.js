const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config(); // Optional, for environment variables

const app = express();
const PORT = process.env.PORT || 5000;
const DB_URL = process.env.MONGO_URI || 'mongodb://localhost:27017/innocart'; // Update this URL if needed
const path = require('path');
// Middleware
app.use(cors());
app.use(express.json()); // Only one instance needed
app.use('/images/products', express.static(path.join(__dirname, '../innocart/src/images/products')));
// Use routes from 'routes/products.js'
app.use('/api', require('./routes/products'));

// Connect to MongoDB
mongoose.connect(DB_URL)
  .then(() => {
    console.log('MongoDB Connected');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error.message);
  });

// Example route
app.get('/', (req, res) => {
  res.send('Welcome to InnoCart Backend');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Global error handler (optional)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});
