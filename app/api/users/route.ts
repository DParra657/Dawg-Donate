import { NextResponse } from 'next/server';
import connectMongoDB from '@/config/mongodb';
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

// Define a Mongoose schema and model for users
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  items: [
    {
      title: String,
      image: String,
    },
  ], // Array of items associated with the user
});

const User = mongoose.models.User || mongoose.model('User', userSchema);

export async function POST(req: Request) {
  try {
    const { email, password, name } = await req.json();

    // Validate required fields
    if (!email || !password || !name) {
      return NextResponse.json({ error: 'Missing email, password, or name' }, { status: 400 });
    }

    // Connect to MongoDB
    await connectMongoDB();

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ error: 'User already exists' }, { status: 409 });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user with an empty items array
    const newUser = new User({
      email,
      password: hashedPassword,
      name,
      items: [], // Initialize with an empty array
    });

    // Save the new user to the database
    const result = await newUser.save();

    return NextResponse.json({ message: 'User created successfully', userId: result._id });
  } catch (error) {
    console.error('Error in POST /api/users:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}