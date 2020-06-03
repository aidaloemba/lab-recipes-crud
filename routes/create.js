const express = require("express");
const app = express();
const Recipe = require("../models/recipe");

app.get("/recipe/create", (req, res) => { debugger
    res.render("create");
   
})

app.post("/recipe/create", (req, res) => {
    let newRecipe = {

        title: req.body.title,
        dishType: req.body.dishType,
        creator: req.body.creator,
    };
    
    Recipe
        .create(newRecipe)
        .then((recipe) => {
            res.render("recipe-details", {recipe})
        // res.redirect(`/recipe/details?id=${recipe._id}`)
        })
        .catch((err) => {
            console.log("err", err);
        })
})

module.exports = app;