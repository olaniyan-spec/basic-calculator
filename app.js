var express = require("express");
app = express();
app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.render("home");
});

app.get("/about", function (req, res) {
  res.render("about");
});

app.listen(3000, function (req, res) {
  console.log("server running");
});