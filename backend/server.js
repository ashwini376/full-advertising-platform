import 'dotenv/config';
import connectDB from './config/db.js';

console.log('MongoDB URI:', process.env.MONGO_URI); // Debugging line

// Connect to MongoDB
connectDB();