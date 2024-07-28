const express = require('express');
const router = express.Router();
const aspirantsAPIController = require('../../controllers/api/aspirantsAPIController');

//Rutas
router.get('/', aspirantsAPIController.list);
//GET aspirants by profession
router.get('/:profession', aspirantsAPIController.listByProfession);

module.exports = router;