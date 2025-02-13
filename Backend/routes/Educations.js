const express = require("express");
const mongoose = require("mongoose");
const { educationSchema } = require("../models/education")
const asyncHandler = require("express-async-handler")
const router = express.Router();
const Joi = require("joi");


const Education = new mongoose.model("Education", educationSchema)

router.get("/", asyncHandler(async (req, res) => {
    const educationList = await Education.find();
    res.status(200).json(educationList)
}))

router.post("/", asyncHandler(async (req, res) => {
    const { error } = validatePostEducation(req.body);
    if (error) {
        res.status(400).json({ message: error.details[0].message })
    }

    const educationToAdd = new Education({
        Name: req.body.Name,
        Info: req.body.Info,
        ImageUrl: req.body.ImageUrl,
    })
    const result = await educationToAdd.save();
    res.status(201).json({ message: "Education added successfully", result })
}))

const validatePostEducation = (data) => {
    const schema = Joi.object({
        Name: Joi.string()
            .min(3)
            .max(100)
            .required()
            .messages({
                'string.min': 'Name must be at least 3 characters',
                'string.max': 'Name cannot exceed 30 characters',
                'any.required': 'Education Name is required'
            }),

        Info: Joi.string()
            .min(3)
            .max(200)
            .messages({
                'string.min': 'Info must be at least 3 characters',
                'string.max': 'Info cannot exceed 200 characters',
                'any.required': 'Info is required'
            }),


        ImageUrl: Joi.string().required(),
    })
    return schema.validate(data);
}

module.exports = {
    educationRouter: router
}