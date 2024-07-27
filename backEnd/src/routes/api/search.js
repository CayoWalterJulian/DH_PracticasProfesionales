const express = require('express');
const router = express.Router();
const searchAPIController = require('../../controllers/api/searchAPIController');

//Rutas
router.get('/', searchAPIController.profession);

module.exports = router;