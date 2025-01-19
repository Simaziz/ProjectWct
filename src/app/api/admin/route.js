import { NextResponse } from 'next/server';
import connectToDatabase  from '../../../../lib/db'; // Adjust the path if needed
import {ObjectId } from 'mongodb';

export const POST = async (request) => {
  try {
    const { userId, action } = await request.json();

    if (!userId || !['approve', 'reject'].includes(action)) {
      return NextResponse.json({ message: 'Invalid input' }, { status: 400 });
    }

    // Connect to the database
    const { db } = await connectToDatabase();
    
    // Add debugging log
    console.log('Database connection:', db); // This will help debug if the db is connected properly

    if (!db) {
      throw new Error('Failed to connect to the database');
    }

    // Find the user by ID
    const user = await db.collection('users').findOne({ _id: new ObjectId(userId) });

    if (!user) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }

    // Update user status
    const status = action === 'approve' ? 'approved' : 'rejected';
    await db.collection('users').updateOne(
      { _id: new ObjectId(userId) },
      { $set: { status } }
    );

    return NextResponse.json({ message: `User ${status} successfully.` });
  } catch (error) {
    console.error('Error during admin action:', error);
    return NextResponse.json(
      { message: `Error during admin action: ${error.message}` },
      { status: 500 }
    );
  }
};
