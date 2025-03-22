import express from 'express';
import { getAllAds, trackEngagement } from '../controllers/viewerController.js';

const router = express.Router();

// Get all approved ads
router.get('/ads', getAllAds);

// Track ad engagement
router.post('/ads/:adId/engage', trackEngagement);

export default router; // Use default export