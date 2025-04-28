import { NextResponse } from 'next/server';
import connectMongoDB from '@/config/mongodb';
import { User } from '@/models/User'; // ✅ Import User from models/User
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export async function POST(req: Request) {
  try {
    const { email, password, name } = await req.json();  // Accept name

    if (!email || !password || !name) {
      return NextResponse.json({ success: false, error: 'Missing email, password, or name' }, { status: 400 });
    }

    // Connect to MongoDB using Mongoose
    await connectMongoDB();

    // Find the user by email
    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json({ success: false, error: 'User not found' }, { status: 404 });
    }

    // Compare the provided password with the hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return NextResponse.json({ success: false, error: 'Incorrect password' }, { status: 401 });
    }

    // Generate a JWT token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET!, { expiresIn: '1h' });

    // Set the token in an HTTP-only cookie
    const response = NextResponse.json({
      success: true,
      message: 'Login successful',
      data: { 
        token, 
        userId: user._id,
        name: user.name,  // Make sure to return the name as well
        email: user.email  // Return email if needed
      },
    });
    response.cookies.set('authToken', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
      path: '/',
      maxAge: 60 * 60, // 1 hour
    });

    return response;
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error in POST /api/login:', error.message);
    } else {
      console.error('Error in POST /api/login:', error);
    }
    return NextResponse.json({ success: false, error: 'Internal server error' }, { status: 500 });
  }
}
