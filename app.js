const express = require("express");
const app = express();
const bodyParser = require("body-parser");
// MONGOOSE SETUP
const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://NamanBhoj:test123@cluster0.dzgkf.mongodb.net/todo_DB",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
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

const item1 = new Item({ name: "This list will always have atleast one item" });
const item2 = new Item({ name: "Apple" });
const item3 = new Item({ name: "Orange" });

const defaultList = [item1, item2, item3];
// console.log(defaultList);
//GET METHODS
app.get("/", function (req, res) {
  Item.find({}, function (err, founditems) {
    if (founditems.length === 0) {
      Item.insertMany(defaultList, function (err) {
        if (err) {
          console.log(err);
        } else {
          console.log("Succesful insertion");
        }
      });
      res.redirect("/");
    } else {
      res.render("index", { currentDate: currentDate, item: founditems });
    }
  });
});

//POST METHODS
app.post("/", function (req, res) {
  const itemName = req.body.addtolist;

  const item = new Item({ name: itemName });

  item.save();

  res.redirect("/");
});

// DELETE USING POST METHOD
app.post("/delete", function (req, res) {
  const deleteItemId = req.body.checkbox;

  Item.findByIdAndDelete(deleteItemId, function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("Success");
      res.redirect("/");
    }
  });
});
module.exports = app;
