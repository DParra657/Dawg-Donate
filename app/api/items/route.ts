import { NextResponse } from 'next/server';
import connectMongoDB from '@/config/mongodb';
import mongoose from 'mongoose';

// Define a Mongoose schema and model for users
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  items: {
    type: [
      {
        _id: { type: mongoose.Schema.Types.ObjectId, default: () => new mongoose.Types.ObjectId() }, // Add _id field
        title: String,
        image: String,
      },
    ],
    default: [], // Ensure items array is initialized as empty
  },
});

const User = mongoose.models.User || mongoose.model('User', userSchema);

// GET: Fetch all items for a specific user
export async function GET(req: Request) {
  try {
    const userId = req.headers.get('userId'); // Retrieve userId from request headers

    if (!userId) {
      return NextResponse.json({ error: 'Missing userId' }, { status: 400 });
    }

    await connectMongoDB();

    // Find the user by userId
    const user = await User.findById(userId);
    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    // Ensure items is always an array
    const items = (user.items || []).map((item: { _id: { toString: () => string }; title: string; image: string }) => ({
      id: item._id?.toString() || '', // Convert ObjectId to string
      title: item.title,
      image: item.image,
    }));

    // Return the user's items
    return NextResponse.json(items);
  } catch (error) {
    console.error('Error fetching items:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

// POST: Add a new item to the user's account
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { title, image, userId } = body; // Include userId in the request body

    if (!title || !image || !userId) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }

    await connectMongoDB();

    // Find the user by userId
    const user = await User.findById(userId);
    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    // Ensure items array exists
    if (!user.items) {
      user.items = [];
    }

    // Add the new item to the user's items array
    user.items.push({ title, image });
    await user.save(); // Save the updated user document

    return NextResponse.json({ message: 'Item added to account', id: user.items[user.items.length - 1]._id?.toString() || '' }, { status: 201 });
  } catch (error) {
    console.error('POST error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

// PUT: Update an existing item in the user's account
export async function PUT(req: Request) {
  try {
    const body = await req.json();
    const { id, title, image, userId } = body; // Include item id, title, image, and userId in the request body

    if (!id || !title || !image || !userId) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }

    await connectMongoDB();

    // Find the user by userId
    const user = await User.findById(userId);
    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    // Find the item by its id
    const item = user.items.id(id);
    if (!item) {
      return NextResponse.json({ error: 'Item not found' }, { status: 404 });
    }

    // Update the item's title and image
    item.title = title;
    item.image = image;
    await user.save(); // Save the updated user document

    return NextResponse.json({ message: 'Item updated successfully' }, { status: 200 });
  } catch (error) {
    console.error('PUT error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

// DELETE: Remove an item from the user's account
export async function DELETE(req: Request) {
  try {
    const bodyText = await req.text(); // Read the raw request body as text
    if (!bodyText) {
      return NextResponse.json({ error: 'Request body is missing' }, { status: 400 });
    }

    const body = JSON.parse(bodyText); // Parse the request body
    const { id, userId } = body; // Extract item id and userId from the body

    if (!id || !userId) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }

    await connectMongoDB();

    // Find the user by userId
    const user = await User.findById(userId);
    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    // Remove the item by its id
    user.items = user.items.filter((item: { _id: { toString: () => string } }) => item._id?.toString() !== id);
    await user.save(); // Save the updated user document

    return NextResponse.json({ message: 'Item deleted successfully' }, { status: 200 });
  } catch (error) {
    console.error('DELETE error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}