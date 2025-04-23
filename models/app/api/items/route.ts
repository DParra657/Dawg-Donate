import { NextResponse } from 'next/server';
import connectMongoDB from '@/config/mongodb';
import mongoose from 'mongoose';

// Define a Mongoose schema and model for items
const itemSchema = new mongoose.Schema({
  title: String,
  image: String,
});

const Item = mongoose.models.Item || mongoose.model('Item', itemSchema);

// GET: Fetch all items
export async function GET() {
  try {
    await connectMongoDB();
    const items = await Item.find(); // Promise resolves to array of items
    return NextResponse.json(items);
  } catch (error) {
    console.error('Error fetching items:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

// POST: Add a new item
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { title, image } = body;

    if (!title || !image) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }

    await connectMongoDB();

    const newItem = new Item({ title, image });
    const result = await newItem.save(); // Save returns a Promise
    return NextResponse.json({ message: 'Item added', id: result._id }, { status: 201 });
  } catch (error) {
    console.error('POST error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
