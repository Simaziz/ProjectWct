import { NextResponse } from 'next/server';
import connectToDatabase from '../../../../lib/db';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const POST = async (request) => {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json({ message: 'Email and Password are required' }, { status: 400 });
    }

    const { db } = await connectToDatabase();

    // Find the user by email
    const user = await db.collection('users').findOne({ email });
    if (!user) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }

    // Ensure the user is approved by the admin
    if (user.status !== 'approved') {
      return NextResponse.json(
        { message: 'User not approved by admin. Please wait for approval.' },
        { status: 403 }
      );
    }

    // Compare the password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return NextResponse.json({ message: 'Invalid password' }, { status: 401 });
    }

    // Generate a JWT token
    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.JWT_SECRET || 'your-jwt-secret-key',
      { expiresIn: '1h' }
    );

    return NextResponse.json({ message: 'Login successful', token });
  } catch (error) {
    console.error('Error during login:', error);
    return NextResponse.json(
      { message: `Error during login: ${error.message}` },
      { status: 500 }
    );
  }
};
