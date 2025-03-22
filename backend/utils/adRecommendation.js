import Ad from '../models/Ad.js';

const recommendAds = async (userId) => {
  try {
    // Fetch ads based on user preferences (dummy logic)
    const ads = await Ad.find({ status: 'approved' }).limit(5);
    return ads;
  } catch (err) {
    console.error('Error recommending ads:', err);
    throw err;
  }
};

export { recommendAds }; // Use named export