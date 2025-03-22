import Ad from '../models/Ad.js';

// Create a new ad
const createAd = async (req, res) => {
  const { title, description, image, budget, duration } = req.body;

  try {
    const ad = new Ad({
      title,
      description,
      image,
      budget,
      duration,
      advertiser: req.user.userId,
    });

    await ad.save();
    res.status(201).json(ad);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Get all ads by advertiser
const getAdsByAdvertiser = async (req, res) => {
  try {
    const ads = await Ad.find({ advertiser: req.user.userId });
    res.json(ads);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

export { createAd, getAdsByAdvertiser }; // Use named exports