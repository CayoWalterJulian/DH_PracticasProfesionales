const express = require('express');
const router = express.Router();
const areaController = require('../controllers/areaController');

router.get('/', areaController.list);
router.get("/create", areaController.create)
router.get("/edit", areaController.edit)
router.get("/delete", areaController.delete)

router.post("/create", areaController.save)


module.exports = router;