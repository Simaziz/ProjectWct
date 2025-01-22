const express = require('express');
const app = express();
const authRoutes = require('./routes/authRoutes');

app.use(express.json()); // Middleware to parse JSON request body

// Use the auth routes
app.use('/api/auth', authRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
