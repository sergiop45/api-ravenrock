const express = require("express");
const router = express.Router();
const postController = require("../controllers/posts.controller");

router.post("/", postController.create);
router.get("/:id", postController.findById);
router.get("/", postController.findAll);
router.delete("/:id", postController.remove);
router.put("/:id", postController.update);

module.exports = router;