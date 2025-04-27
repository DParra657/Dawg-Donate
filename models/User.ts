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
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  items: {
    type: [{
      _id: { type: mongoose.Schema.Types.ObjectId, auto: true }, // This is crucial
      title: String,
      image: String
    }],
    default: []
  }
});

// 3. Export a REAL Mongoose Model
export const User = models.User || model<IUser>('User', userSchema);
