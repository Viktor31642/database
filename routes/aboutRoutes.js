const express = require("express");
const properties = require("../package.json");
const aboutRoutes = express.Router();


aboutRoutes.get("/", (req, res) => {
    const aboutInfo = {
        name: properties.name,
        description: properties.description,
        author: properties.author
    }
    res.json(aboutInfo)
})
module.exports = aboutRoutes