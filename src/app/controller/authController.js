const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.login = async (req, res) => {
  const { email, password } = req.body;

  // Find the user by email
  const user = await User.findOne({ email });

  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  // Generate a JWT token
  const token = jwt.sign(
    { userId: user._id }, // Attach userId to the token payload
    process.env.JWT_SECRET, 
    { expiresIn: '1h' }
  );

  // Send user data and token in the response
  res.json({
    token,
    user: {
      _id: user._id,
      name: user.name,
      email: user.email
    },
  });
};
