var express = require("express");
var path = require('path');
var app = express();

var db = require("../models");

var router = express.Router();

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
var connection = require("../config/connection.js");

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

router.get("/job", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/job.html"));
});

router.get("/restaurant", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/restaurant.html"));
});

router.post("/shiftByDate", function(req, res) {
  console.log(req.body);

  db.Shift.findAll({where: {shiftDate: req.body.dateToEdit}}).then(function(dbUser) {
    // console.log(dbUser);
    // console.log(req.body.id);
    res.json(dbUser);
  });
});

router.post("/login", function(req, res) {
  // db.User.create({
  //   email: req.body.email,
  //   password: req.body.password,
  // }).then(function(dbUser) {
  //   console.log(dbUser);
  // });
  // console.log(req.body);
});

router.post("/newUser", function(req, res) {
  db.User.create({
    user_id: req.body.user_id,
    user_email: req.body.user_email,
    user_name: req.body.user_name,
    user_password: req.body.user_password,
    user_level: req.body.user_level,
    restaurant_name: req.body.restaurant_name,
    isReal: false
  }).then(function(dbUser) {
    console.log(dbUser);
  });
  console.log(req.body);
});

router.post("/newShift", function(req, res) {
  db.Shift.create({
    restaurant_id: req.body.restaurant_id,
    user_id: req.body.user_id,
    shiftDate: req.body.shiftDate,
    timeIn: 0,
    timeOut: 1,
    shiftType: req.body.shiftType,
    largestTip: req.body.largestTip,
    smallestTip: req.body.smallestTip,
    stiffed: req.body.stiffed,
    bwl: req.body.bwl,
    sales: req.body.sales,
    tipout: req.body.tipout,
    tipPercent: req.body.tipPercent,
    ppa: req.body.ppa,
    comments: req.body.comments,
    breakthroughs: req.body.breakthroughs,
    isReal: false
  }).then(function(dbUser) {
    console.log(dbUser);
  });
  console.log(req.body);
});

router.post("/newJob", function(req, res) {
  db.Job.create({
    restaurant_id: req.body.restaurant_id,
    user_id: req.body.user_id,
    startDate: req.body.startDate,
    endDate: req.body.endDate,
    wage: req.body.wage,
    isReal: false,
    userJobMenu: 1,
    comments: req.body.comments
  }).then(function(dbUser) {
    console.log(dbUser);
  });
  console.log(req.body);
});

router.post("/newRestaurant", function(req, res) {
  db.Restaurant.create({
    restaurant_id: req.body.restaurant_id,
    restaurant_name: req.body.restaurant_name,
    defaultMenu: 1,
    isReal: true
  }).then(function(dbUser) {
    console.log(dbUser);
  });
  console.log(req.body);
});

router.post("/editShift", function(req, res) {
  var shiftData = req.body;
  db.Shift.update(shiftData, {
    where: {restaurant_id: shiftData.restaurant_id}
  }).then(function(dbUser) {
    console.log(dbUser);
  });
});

router.post("/deleteShift", function(req, res) {
  var shiftData = req.body;
  db.Shift.destroy({where: {id: shiftData.id}}).then(function(dbUser) {
    console.log(dbUser);
  });
});

//Keep this at the end of the router section.
//If nothing is found this is sent.
router.get('*', function(req, res){
  res.status(404).send('404 Page Goes Here');
});


// Export routes for server.js to use.
module.exports = router;






// SEQUELIZE CRUD METHODS

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