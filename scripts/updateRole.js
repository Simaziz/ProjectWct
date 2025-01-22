import mongoose from 'mongoose';

// Define the User model (adjust according to your schema)
const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  role: String,  // Make sure 'role' is part of your schema
});

const User = mongoose.models.User || mongoose.model('Users', UserSchema);

const updateRoles = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect('mongodb://localhost:27017/your_database_name', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
    
    // Update the role of all users
    const result = await User.updateMany({}, { $set: { role: 'trainee' } });
    console.log(`Updated ${result.nModified} users to 'trainee' role.`);
  } catch (error) {
    console.error('Error updating roles:', error);
  } finally {
    // Close MongoDB connection
    mongoose.disconnect();
  }
};

// Run the update script
updateRoles();
