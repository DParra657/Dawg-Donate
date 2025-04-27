import { NextResponse } from 'next/server';
import connectMongoDB from '@/config/mongodb';
import { User } from '@/models/User';

export async function GET() {
  try {
    await connectMongoDB();
    const users = await User.find({ "items.isPublic": true });

    const publicItems = users.flatMap(user =>
      user.items
        .filter((item: any) => item.isPublic)
        .map((item: any) => ({
          id: item._id.toString(),
          title: item.title,
          image: item.image,
          owner: user.email,
        }))
    );

    return NextResponse.json(publicItems, { status: 200 });
  } catch (error) {
    console.error('Error fetching public items:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
