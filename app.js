const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const date = new Date();

currentDate = date.toLocaleDateString("en-US");

var item = ["bUY fOOD"];

app.get("/", function (req, res) {
  res.render("index.ejs", { currentDate: currentDate, item: item });
});

app.post("/", function (req, res) {
  item.push(req.body.addtolist);
  res.redirect("/");
});
module.exports = app;
