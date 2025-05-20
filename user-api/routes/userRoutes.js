const express = require('express');
const { getProfile, updateProfile } = require('../controllers/authController');
const auth = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/profile', auth, getProfile);
router.put('/profile', auth, updateProfile);

module.exports = router;