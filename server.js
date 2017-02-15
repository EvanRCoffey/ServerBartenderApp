//SET UP EXPRESS SERVER

var express = require('express');
var path = require('path');
var app = express();
var PORT = process.env.PORT || 8080;
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

var routes = require("./controllers/route_controller.js");
var connection = require("./config/connection.js");

//ROUTING

//Servers all of our static .css and .js files.
app.use(express.static(path.join(__dirname,'public/assets')));

//Routes are found in controllers/route_controllers.js
app.use("/", routes);

//LISTENER
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
