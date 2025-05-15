const express = require("express");
const app = express();
const mongoose = require("mongoose");

async function conectarDB() {
    try {
      await mongoose.connect(process.env.MONGO_URL);
      console.log("✅ Conectado ao DB.");
    } catch (err) {
      console.log("❌ Erro ao conectar ao DB:", err);
    }
  }
  
conectarDB();

const authRouter = require("./routes/auth.routes");
const usersRouter = require("./routes/users.routes");
const tasksRouter = require("./routes/tasks.routes");
const clientsRouter = require("./routes/clients.routes");

app.use(express.json());

app.use("/users", usersRouter);
app.use("/tasks", tasksRouter);
app.use("/clients", clientsRouter);
app.use("/", authRouter);


app.get("/", (req, res) => {
    res.send("backend da ravenrock");
});

module.exports = app;
