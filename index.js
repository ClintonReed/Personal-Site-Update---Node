var express = require("express");
var app = express();

// view engine setup
app.set("views", "views");
app.set("view engine", "pug");

// Using Express
app.use(express.static("public"));

// Serving up index.html
app.get("/", function (req, res) {
  res.sendfile("index.html");
});

// Serving up hello.pug
app.get("/hello", function (req, res) {
  res.render("hello", { title: "Hello", message: "Hello there!", });
});

// Server port location
app.listen(3000, function () {
  console.log("Listening on port 3000!");
});
