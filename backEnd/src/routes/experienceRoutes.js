const express = require('express');
const router = express.Router();
const experienceController = require('../controllers/experienceController');

// Rutas para el modelo Experience

// Mostrar todas las experiencias
router.get('/', experienceController.index);

// Mostrar detalles de una experiencia
router.get('/detail/:id', experienceController.detail);

// Formulario para crear una nueva experiencia
/*router.get('/create', experienceController.create);

// Guardar una nueva experiencia
router.post('/store', experienceController.store);

// Formulario para editar una experiencia existente
router.get('/edit/:id', experienceController.edit);

// Actualizar una experiencia existente
router.post('/update/:id', experienceController.update);

// Eliminar una experiencia
router.post('/destroy/:id', experienceController.destroy);*/

module.exports = router;
