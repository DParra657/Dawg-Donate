import { NextResponse } from 'next/server';
import connectMongoDB from '@/config/mongodb';
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

// Define a Mongoose schema and model for users
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
});

const User = mongoose.models.User || mongoose.model('User', userSchema);

export async function POST(req: Request) {
  try {
    const { email, password, name } = await req.json();

    if (!email || !password || !name) {
      return NextResponse.json({ error: 'Missing email or password' }, { status: 400 });
    }

    // Connect to MongoDB using Mongoose
    await connectMongoDB();

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ error: 'User already exists' }, { status: 409 });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({ email, password: hashedPassword, name });
    const result = await newUser.save();

    return NextResponse.json({ message: 'User created', userId: result._id });
  } catch (error) {
    console.error('Error in POST /api/users:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}