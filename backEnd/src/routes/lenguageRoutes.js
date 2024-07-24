const express = require('express');
const router = express.Router();
const aspirantController = require('../controllers/lenguageController');

<<<<<<< HEAD
router.get('/lenguage', aspirantController.list);
=======
router.get('/', aspirantController.list);
>>>>>>> cec327ab3233e76be13e54e437361039fd006294

module.exports = router;