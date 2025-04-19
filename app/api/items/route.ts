import { NextResponse } from 'next/server';
import connectMongoDB from '@/config/mongodb';
import mongoose from 'mongoose';

// Define a Mongoose schema and model for items
const itemSchema = new mongoose.Schema({
  title: String,
  image: String,
});

const Item = mongoose.models.Item || mongoose.model('Item', itemSchema);

export async function GET() {
  try {
    // Connect to MongoDB
    await connectMongoDB();

    // Fetch all items from the database
    const items = await Item.find();

    // Return the items as JSON
    return NextResponse.json(items);
  } catch (error) {
    console.error('Error fetching items:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { title, image } = body;

    if (!title || !image) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }

    // Connect to MongoDB
    await connectMongoDB();

    // Create a new item in the database
    const newItem = new Item({ title, image });
    const result = await newItem.save();

    return NextResponse.json({ message: 'Item added', id: result._id });
  } catch (error) {
    console.error('POST error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}