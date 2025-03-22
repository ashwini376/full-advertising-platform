import User from '../models/User.js';
import Ad from '../models/Ad.js';

// Get all users
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Approve an ad
const approveAd = async (req, res) => {
  const { adId } = req.params;

  try {
    const ad = await Ad.findById(adId);
    if (!ad) {
      return res.status(404).json({ message: 'Ad not found' });
    }

    ad.status = 'approved';
    await ad.save();

    res.json({ message: 'Ad approved successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

export { getAllUsers, approveAd }; // Use named exports