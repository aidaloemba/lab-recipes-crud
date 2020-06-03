const express = require("express");
const app = express();
const Recipe = require("../models/recipe");

app.get("/recipe/details", (req, res) => {
    let objectID = req.query.id;
    Recipe
      .findById(objectID)
      .then((recipe) => {
        res.render("recipe-details.hbs", {recipe})
      })
      .catch((err) => {
        console.log(err)
      })
})

module.exports = app;