var express = require("express");
var path = require('path');
var app = express();

var db = require("../models");

var router = express.Router();

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
var connection = require("../config/connection.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/home.html"));
});

router.get("/alt", function(req, res) {

//  CREATE!
//   db.Blah.create({
//   email: "HELLYEAH@myspace.com",
//   password: "superduperinsecurepassword123",
//   age: 55,
//   name: "Betty"
// }).then(function(dbUser) {
//   console.log(dbUser);
// });

//  FIND ONE!
// db.Blah.findOne({ where: {id: 1} }).then(function(dbUser) {
//     console.log(dbUser);
//   });

//  FIND ALL!
// db.Blah.findAll().then(function(dbUser) {
//   console.log(dbUser);
// });

//  UPDATE ONE!
// var newTom = {
//   age: 25,
//   email: "mark@facebook.com"
// };
// db.Blah.update(newTom, {
//   where: {
//     id: 1
//   }
// }).then(function(dbUser) {
//   console.log(dbUser);
// });

// DELETE ONE!
// db.Blah.destroy({
//   where: {id: 1}
// }).then(function(dbUser) {
//   console.log(dbUser);
// });

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

router.get("/job", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/job.html"));
});

router.get("/restaurant", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/restaurant.html"));
});

router.post("/login", function(req, res) {
    //Interact with DB here
    console.log(req.body);
  });

router.post("/newUser", function(req, res) {
    //Interact with DB here
    console.log(req.body);
  });

router.post("/newShift", function(req, res) {
    //Interact with DB here
    console.log(req.body);
  });

router.post("/newJob", function(req, res) {
    //Interact with DB here
    console.log(req.body);
  });

router.post("/newRestaurant", function(req, res) {
    //Interact with DB here
    console.log(req.body);
  });

//Keep this at the end of the router section.
//If nothing is found this is sent.
router.get('*', function(req, res){
  res.status(404).send('404 Page Goes Here');
});


// Export routes for server.js to use.
module.exports = router;
