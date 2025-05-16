const express = require("express");
const router = express.Router();
const userController = require("../controllers/users.controller");
const authMidleware = require("../midlewere/auth");

router.get("/", authMidleware, userController.listar);
router.get("/:id", authMidleware, userController.findById)
router.post("/", userController.create);
router.delete("/:id", authMidleware, userController.delete);
router.put("/:id", authMidleware, userController.update);

module.exports = router;