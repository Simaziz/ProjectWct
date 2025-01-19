// src/app/api/users/route.js
import  {NextResponse} from 'next/server';
import connect from '../../../../lib/db';
import User from '../../../models/User'; // Ensure this path is correct

export const GET = async () => {
  try {
    await connect();
    const users = await User.find({ status: 'pending' }); // Filter by pending status
    return new NextResponse(JSON.stringify(users), { status: 200 });
  } catch (error) {
    return new NextResponse('Error fetching users: ' + error.message, { status: 500 });
  }
};
