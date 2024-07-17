const express = require('express');
const router = express.Router();
const aspirantController = require('../controllers/lenguageController');

router.get('/lenguage', aspirantController.list);

module.exports = router;