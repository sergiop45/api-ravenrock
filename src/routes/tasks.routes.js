const express = require("express");
const router = express.Router();
const authMidleware = require("../midlewere/auth");
const taskController = require("../controllers/tasks.controller");

router.post("/", taskController.create);
router.get("/", taskController.findAll);
router.get("/:id", taskController.findOne);
router.delete("/:id", taskController.remove);
router.put("/:id", taskController.update);

module.exports = router;