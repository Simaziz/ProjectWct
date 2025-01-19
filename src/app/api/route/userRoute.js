const express = require('express');
const User = require('../models/User'); // Adjust the path as needed
const router = express.Router();

// Route: User Registration
router.post('/register', async (req, res) => {
    const { name, email, password } = req.body;
    const user = new User({ name, email, password, status: 'pending' }); // Set default status
    try {
      await user.save();
      res.status(201).json({ message: 'User registered successfully. Pending approval.' });
    } catch (error) {
      res.status(500).json({ message: 'Error registering user.', error });
    }
  });
  

// Route: Get Pending Users (Admin View)
router.get('/admin/pending-users', async (req, res) => {
    try {
      const users = await User.find({ status: 'pending' });
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching users.', error });
    }
  });
  

// Route: Approve User
router.put('/admin/approve/:id', async (req, res) => {
  const userId = req.params.id;
  try {
    await User.findByIdAndUpdate(userId, { status: 'approved' });
    res.status(200).json({ message: 'User approved successfully.' });
  } catch (error) {
    res.status(500).json({ message: 'Error approving user.', error });
  }
});

// Route: Reject User
router.put('/admin/reject/:id', async (req, res) => {
  const userId = req.params.id;
  try {
    await User.findByIdAndUpdate(userId, { status: 'rejected' });
    res.status(200).json({ message: 'User rejected successfully.' });
  } catch (error) {
    res.status(500).json({ message: 'Error rejecting user.', error });
  }
});

module.exports = router;
