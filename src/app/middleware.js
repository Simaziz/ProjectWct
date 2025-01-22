import jwt from 'jsonwebtoken';
import User from './models2/User'; // Adjust path as needed
import dbConnect from '../lib/mongodb';

export const verifyAdmin = async (req, res, next) => {
  await dbConnect();

  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ success: false, message: 'Unauthorized' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id);

    if (user.role !== 'admin') {
      return res.status(403).json({ success: false, message: 'Forbidden' });
    }

    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({ success: false, message: 'Unauthorized' });
  }
};
