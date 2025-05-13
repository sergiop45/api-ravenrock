const express = require("express");
const router = express.Router()

router.get("/", (req, res) => {
    res.send("todas as tarefas");
});

module.exports = router;