import jwt from 'jsonwebtoken';
import { NextResponse } from 'next/server';
import connectToDatabase from '../../../../lib/db'; // Ensure the path is correct

export const GET = async (request) => {
  try {
    const token = request.headers.get('Authorization')?.split(' ')[1];

    if (!token) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    // Verify the token
    const decoded = jwt.verify(token, 'your-jwt-secret-key');
    
    const { db } = await connectToDatabase();
    const user = await db.collection('users').findOne({ _id: decoded.userId });

    if (!user) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }

    return NextResponse.json({ user });
  } catch (error) {
    console.error('Error fetching profile:', error);
    return NextResponse.json({ message: 'Invalid or expired token' }, { status: 401 });
  }
};
