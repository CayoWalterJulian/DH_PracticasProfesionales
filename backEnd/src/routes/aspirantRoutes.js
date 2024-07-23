// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const aspirantController = require('../controllers/aspirantController');

/*** GET ALL ASPIRANTS ***/ 
router.get('/', aspirantController.index); 

module.exports = router;