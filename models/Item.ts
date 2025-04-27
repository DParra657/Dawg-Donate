import mongoose, { Schema, model, models, Document, Types } from 'mongoose';

// 1. Simplified Item Interface
export interface IItem {
  _id: Types.ObjectId;
  title: string;
  image: string;
  isPublic?: boolean; // Optional property to match the schema
}

// 2. Minimal Item Schema
const ItemSchema = new Schema<IItem>({
  title: { type: String, required: true },
  image: { type: String, required: true },
  isPublic: { type: Boolean, default: true } // Uncomment if needed
}, { _id: true });

// 3. User Interface with Proper Typing
export interface IUser extends Document {
  items: Types.DocumentArray<IItem>;
}

// 4. Export just the Item model
export const Item = models.Item || model<IItem>('Item', ItemSchema);