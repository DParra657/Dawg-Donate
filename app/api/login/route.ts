import { NextResponse } from 'next/server';
import connectMongoDB from '@/config/mongodb';
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// Define a Mongoose schema and model for users
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User = mongoose.models.User || mongoose.model('User', userSchema);

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json({ success: false, error: 'Missing email or password' }, { status: 400 });
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
      data: { userId: user._id, name: user.name },
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