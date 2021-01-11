var express = require("express");
var app = express();

// view engine setup
app.set("views", "views");
app.set("view engine", "pug");

// Using Express
app.use(express.static("public"));

// Serving index.pug
app.get('/', function (req, res) {
  res.render('index', { title: 'CReed Productions', message: 'CReed Productions'})
})

app.get('/home', function (req, res) {
  res.render('home', { title: 'CReedProd Home', message: 'Welcome'})
})

app.get('/photography', function (req, res) {
  res.render('photography', { title: 'CreedProd Photography', message: 'Photography'})
})

// Server port location
app.listen(3000, function () {
  console.log("Listening on port 3000!");
});
