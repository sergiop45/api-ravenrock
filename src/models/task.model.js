const mongoose = require("mongoose");

const taskModel = new mongoose.Schema({

    title: { type: String, required: true, trim: true},
    description: { type: String, required: true, default: ''},
    status: { type: String, enum: ['pending', 'in_progress', 'completed'], default: 'pending'},
    dueDate: { type: Date},
    createdAt: { type: Date, default: Date.now },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },

});

module.exports = mongoose.model("Task", taskModel);