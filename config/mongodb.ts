import mongoose from "mongoose";

// Function to connect to MongoDB using Mongoose
const connectMongoDB = async (): Promise<void> => {
  try {
    // Get the MongoDB URI from environment variables
    const uri = process.env.MONGODB_URI;

    // Throw an error if the URI is not set
    if (!uri) {
      throw new Error("MONGODB_URI is not defined in environment variables.");
    }

    // Attempt to connect to MongoDB
    await mongoose.connect(uri);
    console.log("Connected to MongoDB.");
  } catch (error) {
    // Log any errors that occur during connection
    console.log("Error connecting to MongoDB:", (error as Error).message);
  }
};

// Export the connection function so it can be used in other files
export default connectMongoDB;
