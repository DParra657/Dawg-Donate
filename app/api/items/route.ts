import { NextResponse } from 'next/server';
import connectMongoDB from '@/config/mongodb';
import { IUser, User } from '@/models/User'; // ✅ Import only from models/User
import { IItem, Item } from '@/models/Item'; 
import mongoose from 'mongoose';// ✅ IMPORT ONLY

// GET: Fetch all items for a specific user
export async function GET(req: Request) {
  try {
    const userId = req.headers.get('userId'); // Get userId from headers

    if (!userId) {
      return NextResponse.json({ error: 'Missing userId' }, { status: 400 });
    }

    await connectMongoDB();

    const userDoc = await User.findById(userId);
    if (!userDoc) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    const user = userDoc.toObject(); // Convert document to plain object

    if (!user.items || user.items.length === 0) {
      return NextResponse.json({ message: 'No items found for this user' }, { status: 200 });
    }

    const items = user.items.map((item: any) => ({
      id: item._id.toString(),
      title: item.title,
      image: item.image,
    }));

    return NextResponse.json(items, { status: 200 });
  } catch (error) {
    console.error('Error fetching items:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

// POST /api/items
export async function POST(req: Request) {
  try {
    const { title, image, userId } = await req.json();

    // ... (validation checks)

    await connectMongoDB();

    const user = await User.findById(userId);
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Initialize items array if it doesn't exist
    if (!user.items) {
      user.items = [];
    }

    // Create new item with explicit _id
    const newItem = {
      _id: new mongoose.Types.ObjectId(), // Explicitly create ID
      title,
      image
    };

    user.items.push(newItem);
    await user.save();

    // Get the newly created item
    const createdItem = user.items[user.items.length - 1];

    // Safely handle ID conversion
    const itemId = createdItem._id ? createdItem._id.toString() : '';

    return NextResponse.json({
      message: "Item created successfully",
      item: {
        id: itemId,
        title: createdItem.title,
        image: createdItem.image
      }
    }, { status: 201 });

  } catch (error) {
    console.error("POST error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

//PUT:
// PUT /api/items
// app/api/items/route.ts
export async function PUT(req: Request) {
  try {
    const { id, title, image, userId } = await req.json();

    if (!id || !title || !image || !userId) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    await mongoose.connect(process.env.MONGODB_URI!);

    // Directly update the specific item in the user's items array
    const result = await User.updateOne(
      {
        _id: userId,
        "items._id": new mongoose.Types.ObjectId(id)
      },
      {
        $set: {
          "items.$.title": title,
          "items.$.image": image
        }
      }
    );

    if (result.modifiedCount === 0) {
      return NextResponse.json(
        { error: "Item not found or no changes made" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Item updated successfully" },
      { status: 200 }
    );

  } catch (error) {
    console.error("PUT error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}


// DELETE: Remove an item from the user's account
export async function DELETE(req: Request) {
  try {
    const body = await req.text();
    if (!body) {
      return NextResponse.json({ error: 'Request body is missing' }, { status: 400 });
    }

    const { id, userId } = JSON.parse(body);

    if (!id || !userId) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }

    await connectMongoDB();

    const user = await User.findById(userId);
    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    user.items = user.items.filter((item: any) => item._id.toString() !== id);

    await user.save();

    return NextResponse.json({ message: 'Item deleted successfully' }, { status: 200 });
  } catch (error) {
    console.error('DELETE error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
