var express = require("express");
var app = express();

// view engine setup
app.set("views", "views");
app.set("view engine", "pug");

// Using Express
app.use(express.static("public"));

// Serving index.pug
app.get('/', function (req, res) {
  res.render('index', { title: 'SeaReed Productions', message: 'SeaReed Productions'})
})

app.get('/home', function (req, res) {
  res.render('home', { title: 'SeaReed Productions Home', message: 'SeaReed Productions'})
})

// Server port location
app.listen(3000, function () {
  console.log("Listening on port 3000!");
});
