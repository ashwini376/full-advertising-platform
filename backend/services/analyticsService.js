import Ad from '../models/Ad.js';

const getAdPerformance = async (adId) => {
  try {
    const ad = await Ad.findById(adId);
    if (!ad) {
      throw new Error('Ad not found');
    }

    return {
      clicks: ad.clicks,
      impressions: ad.impressions,
    };
  } catch (err) {
    console.error('Error fetching ad performance:', err);
    throw err;
  }
};

export { getAdPerformance }; // Use named export