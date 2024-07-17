const express = require('express');
const router = express.Router();
const newsController = require('../controllers/newsController');

// Get news by category
router.get('/:category', newsController.getNewsByCategory);

module.exports = router;
