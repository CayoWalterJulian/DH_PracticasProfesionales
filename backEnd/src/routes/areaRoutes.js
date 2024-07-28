const express = require('express');
const router = express.Router();
const areaController = require('../controllers/areaController');

router.get('/', areaController.list);
router.get("/:id_area", areaController.detail);

router.post("/create", areaController.save)
router.get("/create", areaController.create)


router.get("/edit/:id_area", areaController.edit)
router.post("/edit/:id_area", areaController.update)


module.exports = router;