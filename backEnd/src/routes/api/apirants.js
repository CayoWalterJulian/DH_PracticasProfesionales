const express = require('express');
const router = express.Router();
const aspirantsAPIController = require('../../controllers/api/aspirantsAPIController');

//Rutas
router.get('/', aspirantsAPIController.list);

module.exports = router;