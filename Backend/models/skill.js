const mongoose = require("mongoose");
const skillSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true,
        trim: true,
        min: 3,
        max: 50
    },
    ImageUrl: {
        type: String,
        required: true,
        trim: true,
        min: 3,
        max: 500
    }
}, {
    timestamps: true
})

module.exports = {
    skillSchema
}