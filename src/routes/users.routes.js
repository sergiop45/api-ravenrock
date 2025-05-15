const express = require("express");
const router = express.Router();
const userController = require("../controllers/users.controller");

router.get("/", userController.listar);
router.get("/:id", userController.findById)
router.post("/", userController.create);
router.delete("/:id", userController.delete);
router.put("/:id", userController.update);

module.exports = router;