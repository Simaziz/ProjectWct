import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ['user', 'admin'], // You can extend this list as needed
      default: 'user', // Ensure role is set to 'user' by default
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields
  }
);


export default mongoose.models.User || mongoose.model('User', UserSchema);
