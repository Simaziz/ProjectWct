const express = require('express');
const mongoose = require('mongoose');
const registerRoutes = require('./routes/register');
const adminRoutes = require('./routes/adminApproveRegister'); // Admin routes

const app = express();

// Middleware
app.use(express.json()); // For parsing application/json

// Routes
app.use('/api', registerRoutes);  // User registration routes
app.use('/api', adminRoutes);     // Admin routes

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/yourdbname', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log('Error connecting to MongoDB', err));

// Start the server
app.listen(5000, () => {
  console.log('Server running on port 5000');
});
