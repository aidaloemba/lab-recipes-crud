const express = require("express");
const app = express();
const Recipe = require("../models/recipe");

app.get("/", (req, res) => {
    Recipe
      .find({})
      .then((recipes) => {
        res.render("recipes.hbs", {recipes});
      })
      .catch((err) => {
        console.log(err)
      })
})

module.exports = app;