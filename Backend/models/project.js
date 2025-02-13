const mongoose = require("mongoose");
const projectSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true,
        trim: true,
        min: 3,
        max: 50
    },
    Info: {
        type: String,
        required: true,
        trim: true,
        min: 3,
        max: 500
    },
    Url: {
        type: String,
        required: true,
        trim: true,
        min: 3,
        max: 50
    },
    ImageUrl: {
        type: String,
        trim: true,
        min: 3,
        max: 50
    }
}, {
    timestamps: true
})

module.exports = {
    projectSchema
}