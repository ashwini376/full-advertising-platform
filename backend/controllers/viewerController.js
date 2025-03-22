import Ad from '../models/Ad.js';

// Get all approved ads
const getAllAds = async (req, res) => {
  try {
    const ads = await Ad.find({ status: 'approved' });
    res.json(ads);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Track ad engagement
const trackEngagement = async (req, res) => {
  const { adId } = req.params;

  try {
    const ad = await Ad.findById(adId);
    if (!ad) {
      return res.status(404).json({ message: 'Ad not found' });
    }

    ad.clicks += 1;
    await ad.save();

    res.json({ message: 'Engagement tracked successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

export { getAllAds, trackEngagement }; // Use named exports