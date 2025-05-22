const express = require("express");
const router = express.Router();
const userController = require("../controllers/users.controller");
const authMidleware = require("../midlewere/auth");

router.get("/", authMidleware, userController.findAll);
router.get("/:id", authMidleware, userController.findOne)
router.delete("/:id", authMidleware, userController.remove);
router.put("/:id", authMidleware, userController.update);

module.exports = router;