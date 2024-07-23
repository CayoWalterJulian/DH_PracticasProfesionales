// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const productsController = require('../controllers/aspirantController');

/*** GET ALL PRODUCTS ***/ 
router.get('/', aspirantController.index); 

module.exports = router;