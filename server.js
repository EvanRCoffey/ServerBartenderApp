//SET UP EXPRESS SERVER

var express = require('express');
var path = require('path');
var app = express();
var PORT = process.env.PORT || 8080;
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
var connection = require("./config/connection.js");

//ROUTING
//We will eventually split this off into a controllers folder.

//This grabs all of our static files - frontend js and css.
app.use(express.static(path.join(__dirname,'public/assets')));

app.get("/alt", function(req, res) {
	res.sendFile(path.join(__dirname, "/./public/alt.html"));
});

app.get("/login", function(req, res) {
	res.sendFile(path.join(__dirname, "/./public/login.html"));
});

//Login Post
  app.post("/login", function(req, res) {
    console.log(req.body);
  });

// If no matching route is found default to home
app.use(function(req, res) {
	res.sendFile(path.join(__dirname, "./public/home.html"));
});

//Confirming db connection works.
connection.query("SELECT * FROM users;", function(err, result) {
	console.log(result)
    });


//LISTENER

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
