import { NextResponse } from 'next/server';
import connectToDatabase from '../../../../lib/db'; // Adjust the path if needed
import { ObjectId } from 'mongodb';

export const POST = async (request) => {
  try {
    const { userId, action } = await request.json();

    if (!userId || !['approve', 'reject'].includes(action)) {
      return NextResponse.json({ message: 'Invalid input' }, { status: 400 });
    }

    // Connect to the database
    const { db } = await connectToDatabase();

    if (!db) {
      throw new Error('Failed to connect to the database');
    }

    // Find the user by ID
    const user = await db.collection('users').findOne({ _id: new ObjectId(userId) });

    if (!user) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }

    // Determine the new status and role
    const isApproveAction = action === 'approve';
    const status = isApproveAction ? 'approved' : 'rejected';

    const roleUpdate = isApproveAction && user.role === 'trainer' ? { role: 'trainer' } : {};

    // Update user status and role (if applicable)
    await db.collection('users').updateOne(
      { _id: new ObjectId(userId) },
      { $set: { status, ...roleUpdate } }
    );

    const roleMessage = roleUpdate.role ? ` and assigned the role of ${roleUpdate.role}` : '';
    return NextResponse.json({
      message: `User ${status} successfully${roleMessage}.`,
    });
  } catch (error) {
    console.error('Error during admin action:', error);
    return NextResponse.json(
      { message: `Error during admin action: ${error.message}` },
      { status: 500 }
    );
  }
};
