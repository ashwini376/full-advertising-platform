import express from 'express';
import mongoose from 'mongoose';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import adminRoutes from './routes/adminRoutes.js';
import advertiserRoutes from './routes/advertiserRoutes.js';
import viewerRoutes from './routes/viewerRoutes.js';
import errorHandler from './middleware/errorHandler.js';
import 'dotenv/config'; // Add this line

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/advertiser', advertiserRoutes);
app.use('/api/viewer', viewerRoutes);

// Error handling
app.use(errorHandler);

export default app; // Use default export