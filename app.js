const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
hbs.registerPartials(__dirname + '/views/partials');

const mongoose = require("mongoose");
const MONGODB_URI = "mongodb://localhost:27017/recipe-app";

const Recipe = require("./models/recipe");
const bodyParser = require('body-parser');

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));
app.set("partials", path.join(__dirname, "/views/partials"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", require("./routes/recipes"));
app.use("/", require("./routes/details"));
app.use("/", require("./routes/delete"));
app.use("/", require("./routes/create"));

mongoose
  .connect(MONGODB_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(self => {
    console.log(`Connected to the database: "${self.connection.name}"`);
  })

app.listen(3000, () => {
  console.log("Listening on port 3000")
})