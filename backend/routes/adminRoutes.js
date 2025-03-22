import express from 'express';
import { getAllUsers, approveAd } from '../controllers/adminController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

// Protect all routes with authentication
router.use(authMiddleware);

// Get all users
router.get('/users', getAllUsers);

// Approve an ad
router.put('/ads/:adId/approve', approveAd);

export default router; // Use default export