const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
require('dotenv').config();
const { projectRouter } = require("./routes/Projects")
const { educationRouter } = require("./routes/Educations")
const { skillRouter } = require("./routes/Skills")


app.use(cors())
mongoose.connect(process.env.DB_CONNECTION).then(() => {
    console.log("CONNECTED TO MONGODB");
}).catch((error) => {
    console.log(error)
})

app.use(express.json());
app.use("/api/projects", projectRouter);
app.use("/api/educations", educationRouter);
app.use("/api/skills", skillRouter);


app.listen(process.env.PORT, () => {
    console.log(`server running on ${process.env.PORT}`)
})