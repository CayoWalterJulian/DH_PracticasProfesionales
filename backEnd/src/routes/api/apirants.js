const express = require('express');
const router = express.Router();
const aspirantsAPIController = require('../../controllers/api/aspirantsAPIController');

// Ruta para obtener todos los aspirantes
router.get('/', aspirantsAPIController.list);

// Ruta para obtener aspirantes por profesión (si todavía la necesitas)
router.get('/profession/:profession', aspirantsAPIController.listByProfession);

// Ruta para obtener un aspirante por DNI
router.get('/:DNI', aspirantsAPIController.getByDNI);


module.exports = router;