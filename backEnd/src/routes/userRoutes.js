const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/', userController.list);

router.get("/create", userController.create)

router.post("/create", userController.save)

router.get("/edit/:user_id", userController.edit)
router.get("/:user_id", userController.detail);


router.post("/edit/:user_id", userController.update)


router.get('/login', userController.login);
router.post('/login',userController.processLogin);

module.exports = router;