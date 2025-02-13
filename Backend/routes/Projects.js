const express = require("express");
const mongoose = require("mongoose");
const { projectSchema } = require("../models/project")
const asyncHandler = require("express-async-handler")
const router = express.Router();
const Joi = require("joi");


const Project = new mongoose.model("Project", projectSchema)

router.get("/", asyncHandler(async (req, res) => {
    const projectList = await Project.find();
    res.status(200).json(projectList)
}))

router.get(":/id", asyncHandler(async (req, res) => {
    const id = req.params.id;
    project = await Project.findById(id);
    if (project) {
        res.status(200).json(project)
    }
    else {
        res.status(404).json({ message: "Project not found" })
    }
}))

router.post("/", asyncHandler(async (req, res) => {
    const { error } = validatePostProject(req.body);
    if (error) {
        res.status(400).json({ message: error.details[0].message })
    }

    const projectToAdd = new Project({
        Name: req.body.Name,
        Url: req.body.Url,
        Info: req.body.Info,
        ImageUrl: req.body.ImageUrl,
    })
    const result = await projectToAdd.save();
    res.status(201).json({ message: "Project added successfully", result })
}))

const validatePostProject = (data) => {
    const schema = Joi.object({
        Name: Joi.string()
            .min(3)
            .max(30)
            .required()
            .messages({
                'string.min': 'Name must be at least 3 characters',
                'string.max': 'Name cannot exceed 30 characters',
                'any.required': 'Project Name is required'
            }),

        Info: Joi.string()
            .min(3)
            .max(200)
            .messages({
                'string.min': 'Info must be at least 3 characters',
                'string.max': 'Info cannot exceed 200 characters',
                'any.required': 'Info is required'
            }),

        Url: Joi.string()
            .min(10)
            .max(300)
            .required()
            .messages({
                'string.min': 'Url be at least 10 characters',
                'string.max': 'Url exceed 300 characters',
                'any.required': 'Address is required'
            }),

        ImageUrl: Joi.string(),
    })
    return schema.validate(data);
}

module.exports = {
    projectRouter: router
}