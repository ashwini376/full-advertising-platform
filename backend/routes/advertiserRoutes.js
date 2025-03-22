import express from 'express';
import { createAd, getAdsByAdvertiser } from '../controllers/advertiserController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

// Protect all routes with authentication
router.use(authMiddleware);

// Create a new ad
router.post('/ads', createAd);

// Get all ads by advertiser
router.get('/ads', getAdsByAdvertiser);

export default router; // Use default export