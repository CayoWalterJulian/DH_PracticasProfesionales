const express = require('express');
const router = express.Router();
const professionsAPIController = require('../../controllers/api/professionsAPIController');

//Rutas
router.get('/', professionsAPIController.list);

module.exports = router;