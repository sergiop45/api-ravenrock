const express = require("express");
const router = express.Router()

router.get("/", (req, res) => {
    res.send("todos os clientes");
});

module.exports = router;