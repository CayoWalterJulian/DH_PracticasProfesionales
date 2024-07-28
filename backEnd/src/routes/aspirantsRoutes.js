// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const aspirantController = require('../controllers/aspirantController');

/*** GET ALL ASPIRANTS ***/ 
router.get('/', aspirantController.index); 

// /*** CREATE ONE PRODUCT ***/ 
router.get('/create/', aspirantController.create); 
router.post('/store/', aspirantController.store); 


/*** GET ONE PRODUCT ***/ 
router.get('/:id', aspirantController.detail); 

// /*** EDIT ONE PRODUCT ***/ 
router.get('/edit/:id', aspirantController.edit); 
router.put('/:id', aspirantController.update); 


// /*** DELETE ONE PRODUCT ***/ 
router.delete('/:id', aspirantController.destroy); 


module.exports = router;