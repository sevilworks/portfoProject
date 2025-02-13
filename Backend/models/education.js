const mongoose = require("mongoose");
const educationSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true,
        trim: true,
        min: 3,
        max: 100
    },
    Info: {
        type: String,
        required: true,
        trim: true,
        min: 3,
        max: 500
    },
    ImageUrl: {
        type: String,
        required: true,
        trim: true,
        min: 3,
        max: 500
    },
    StartDate:{
        type: String,
        trim: true,
        min: 4,
        max: 50
    },
    EndDate:{
        type: String,
        trim: true,
        min: 4,
        max: 50
    }

}, {
    timestamps: true
})

module.exports = {
    educationSchema
}