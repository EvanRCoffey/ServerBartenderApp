//SET UP EXPRESS SERVER

var express = require('express');
var path = require('path');
var db = require("./models");

var app = express();
var PORT = process.env.PORT || 8080;

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

var routes = require("./controllers/route_controller.js");
// var connection = require("./config/connection.js");

//Servers all of our static .css and .js files.
app.use(express.static(path.join(__dirname,'public/assets')));

//Routes are found in controllers/route_controllers.js
app.use("/", routes);

//LISTENER
db.sequelize.sync().then(function() {
	app.listen(PORT, function() {
		console.log("Listening on port %s", PORT);
	});
})