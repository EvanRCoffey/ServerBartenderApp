var express = require("express");
var path = require('path');
var app = express();

var router = express.Router();

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
var connection = require("../config/connection.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/home.html"));
});

router.get("/alt", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/alt.html"));
});

router.get("/login", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/login.html"));
});

router.get("/signup", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/signup.html"));
});

router.get("/shift", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/shift.html"));
});

router.post("/login", function(req, res) {
	//authenticate email and password using...
	//req.email
	//req.password
    console.log(req.body);
  });

router.post("/newUser", function(req, res) {
	//post new user to table "users" using...
	//req.firstName
	//req.email
	//req.password
    console.log(req.body);
  });

//Keep this at the end of the router section.
//If nothing is found this is sent.
router.get('*', function(req, res){
  res.status(404).send('404 Page Goes Here');
});


// Export routes for server.js to use.
module.exports = router;
