//SET UP EXPRESS SERVER

var express = require('express');
var path = require('path');
var app = express();
var PORT = process.env.PORT || 8080;

//ROUTING

app.get("/alt", function(req, res) {
	res.sendFile(path.join(__dirname, "/./public/alt.html"));
});

// If no matching route is found default to home
app.use(function(req, res) {
	res.sendFile(path.join(__dirname, "./public/home.html"));
});

//LISTENER

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
