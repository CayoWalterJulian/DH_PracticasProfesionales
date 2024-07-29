// ************ Require's ************
const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

// ************ Controller Require ************
const aspirantController = require('../controllers/aspirantController');

const storage = multer.diskStorage({
  destination : function(req, file, cb){
      let folder = path.join(__dirname, '../../public/img/aspirants');

      cb(null, folder);
  },
  filename : function(req, file, cb){
      let ImageName = 'group-' + Date.now() + path.extname(file.originalname);

      cb(null, ImageName);
  }
});

const fileUpload = multer({storage});

/*** GET ALL ASPIRANTS ***/ 
router.get('/', aspirantController.index); 

// /*** CREATE ONE PRODUCT ***/ 
router.get('/create/', aspirantController.create); 
router.post('/store/', fileUpload.single('image'), aspirantController.store); 


/*** GET ONE PRODUCT ***/ 
router.get('/:id', aspirantController.detail); 

// /*** EDIT ONE PRODUCT ***/ 
router.get('/edit/:id', aspirantController.edit); 
router.put('/:id', aspirantController.update); 



module.exports = router;