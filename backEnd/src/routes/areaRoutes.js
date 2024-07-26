const express = require('express');
const router = express.Router();
const areaController = require('../controllers/areaController');

router.get('/', areaController.list);

router.post("/create", areaController.save)
router.get("/create", areaController.create)


router.get("/edit/:id", areaController.edit)

router.post("/delete/:id", areaController.delete)

module.exports = router;