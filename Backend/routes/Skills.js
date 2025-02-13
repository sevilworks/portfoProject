const express = require("express");
const mongoose = require("mongoose");
const { skillSchema } = require("../models/skill")
const asyncHandler = require("express-async-handler")
const router = express.Router();
const Joi = require("joi");


const Skill = new mongoose.model("Skill", skillSchema)

router.get("/", asyncHandler(async (req, res) => {
    const skillList = await Skill.find();
    res.status(200).json(skillList)
}))

router.post("/", asyncHandler(async (req, res) => {
    const { error } = validatePostSkill(req.body);
    if (error) {
        res.status(400).json({ message: error.details[0].message })
    }

    const skillToAdd = new Skill({
        Name: req.body.Name,
        ImageUrl: req.body.ImageUrl,
    })
    const result = await skillToAdd.save();
    res.status(201).json({ message: "Skill added successfully", result })
}))

const validatePostSkill = (data) => {
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

        ImageUrl: Joi.string().required(),
    })
    return schema.validate(data);
}

module.exports = {
    skillRouter: router
}