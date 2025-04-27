import mongoose, { Schema, model, models, Document } from 'mongoose';

// 1. Define TypeScript interface
export interface IItem extends Document {
  title: string;
  image: string;
}

// 2. Define the Mongoose Schema
const ItemSchema = new Schema<IItem>({
  title: { type: String, required: true },
  image: { type: String, required: true },
});

// 3. Export a REAL Mongoose Model
export const Item = models.Item || model<IItem>('Item', ItemSchema);
