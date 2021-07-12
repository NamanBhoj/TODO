const express = require("express");
const app = express();
const bodyParser = require("body-parser");
// MONGOOSE SETUP
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/todo_DB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
//VIEW ENGINE
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const date = require(__dirname + "/date.js");
// const date = new Date();

// currentDate = date.toLocaleDateString("en-US");

currentDate = date();

//var item = ["bUY fOOD"]; // CURRENTLY USSED AS DATABASE

//define the schema of the collection
const itemSchema = new mongoose.Schema({ name: String });
//compile the schema to make a model aka collection
const Item = mongoose.model("Item", itemSchema);

const item1 = new Item({ name: "Banana" });
const item2 = new Item({ name: "Apple" });
const item3 = new Item({ name: "Orange" });

const defaultList = [item1, item2, item3];
console.log(defaultList);

Item.insertMany(defaultList, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Succesful insertion");
  }
});

app.get("/", function (req, res) {
  res.render("index.ejs", { currentDate: currentDate, item: defaultList });
});

app.post("/", function (req, res) {
  item.push(req.body.addtolist);
  res.redirect("/");
});
module.exports = app;
