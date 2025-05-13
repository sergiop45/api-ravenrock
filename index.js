const express = require("express");
const app = express();
const port = 4000;

app.get("/", (req, res) => {
    res.send("backend da ravenrock");
});

app.listen(port, (req, res) => {
    console.log("Servidor rodando na porta: " + port + "...")
})

