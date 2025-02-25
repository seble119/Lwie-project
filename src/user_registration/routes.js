const { Router } = require("express");
const controller = require('./controller');
const router = Router();
 router.get("/", controller.getuser_registration);

 module.exports = router;
