const express = require("express");
const app = express();
const port = 4000;

const usersRouter = require("./routes/users.routes");
const tasksRouter = require("./routes/tasks.routes");
const clientsRouter = require("./routes/clients.routes");

app.use("/users", usersRouter);
app.use("/tasks", tasksRouter);
app.use("/clients", clientsRouter);

app.use(express.json());

app.get("/", (req, res) => {
    res.send("backend da ravenrock");
});

module.exports = app;
