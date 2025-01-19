import { NextResponse } from 'next/server';
import connectToDatabase from '../../../../lib/db';
import bcrypt from 'bcrypt';

const saltRounds = 10; // The number of salt rounds for bcrypt

export const POST = async (request) => {
  try {
    const { name, email, password } = await request.json();

    if (!name || !email || !password) {
      return NextResponse.json({ message: 'All fields are required' }, { status: 400 });
    }

    const { db } = await connectToDatabase();

    // Check if the user already exists
    const existingUser = await db.collection('users').findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { message: 'User already exists with this email' },
        { status: 400 }
      );
    }

    // Hash the password before saving it to the database
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Create and store the new user
    const newUser = {
      name,
      email,
      password: hashedPassword, // Save the hashed password
      status: 'pending', // Set initial status
    };

    await db.collection('users').insertOne(newUser);

    return NextResponse.json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error during registration:', error);
    return NextResponse.json(
      { message: `Error during registration: ${error.message}` },
      { status: 500 }
    );
  }
};
