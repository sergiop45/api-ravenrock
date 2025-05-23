const mongoose = require("mongoose");

const clientModel = new mongoose.Schema({

    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    phone: {
        type: String,
        required: true,
        trim: true
    },
    service: {
        type: String,
        required: true,
        enum: [
            'Web Development',
            'SEO',
            'Marketing',
            'Consulting',
            'Process Automation',
            'Store',
            'Other'
            ]
    },
    message: {
        type: String,
        required: true,
        trim: true
    },
     submittedAt: {
    type: Date,
    default: Date.now
    }

});

module.exports = mongoose.model('Client', clientModel);