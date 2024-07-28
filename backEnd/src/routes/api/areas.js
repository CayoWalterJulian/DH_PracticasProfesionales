const express = require('express');
const router = express.Router();
const areasAPIController = require('../../controllers/api/areasAPIController');

//Rutas
router.get('/', areasAPIController.list);
//GET area by DNI
router.get('/:id', areasAPIController.listByDNI);

module.exports = router;