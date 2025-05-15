const mongoose = require("mongoose");

const usersModel = new mongoose.Schema({
    nome: { type: String, required: true },
    email: { type: Stryng, required: true },
    password: { type: String, required: true },
    criadoEm: { type: Date, default: Date.now }
});

module.exports = usersModel;