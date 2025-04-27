import mongoose, { Schema, model, models, Document } from 'mongoose';

// 1. Define the TypeScript interface
export interface IUser extends Document {
  email: string;
  password: string;
  name: string;
  items: {
    _id: mongoose.Types.ObjectId;
    title: string;
    image: string;
  }[];
}

// 2. Define the Mongoose Schema
const UserSchema = new Schema<IUser>({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  items: [
    {
      _id: { type: mongoose.Schema.Types.ObjectId, default: () => new mongoose.Types.ObjectId() },
      title: { type: String, required: true },
      image: { type: String, required: true },
    },
  ],
});

// 3. Export a REAL Mongoose Model
export const User = models.User || model<IUser>('User', UserSchema);
