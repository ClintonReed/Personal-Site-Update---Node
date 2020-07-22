var express = require("express");
var app = express();

// view engine setup
app.set("views", "views");
app.set("view engine", "pug");

// Using Express
app.use(express.static("public"));

// Serving up index.pug
app.get('/', function (req, res) {
  res.render('index', { title: 'SeaReed Productions', message: 'SeaReed Productions' })
})

// Server port location
app.listen(3000, function () {
  console.log("Listening on port 3000!");
});
