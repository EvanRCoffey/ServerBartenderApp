var express = require("express");
var path = require('path');
var app = express();
var passport = require('passport')
var db = require("../models");

var router = express.Router();

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
var bcrypt = require("bcrypt-nodejs")

router.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
});

router.get("/alt", function(req, res) {

    res.sendFile(path.join(__dirname, "../public/alt.html"));
});

router.get("/login", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/login.html"));
});

router.get("/updateAccount", loggedIn, function(req, res, next) {
    res.sendFile(path.join(__dirname, "../public/updateAccount.html"));
});

router.get("/signup", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/signup.html"));
});

//This is now limited to login only.
router.get("/shift", loggedIn, function(req, res, next) {
    res.sendFile(path.join(__dirname, "../public/shift.html"));
});

router.get("/job", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/job.html"));
});

router.get("/restaurant", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/restaurant.html"));
});

router.post("/login", passport.authenticate('local', {
    failureRedirect: '/loginFailure',
    successRedirect: '/dashboard'
}))

//Logs user out and returns to homepage.
router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
});

//Creates a new user
router.post("/newUser", function(req, res, next) {
    console.log(req.body)
    db.User.findOne({
        where: {
            user_email: req.body.user_email
        }
    }).then(function(user) {
        if (!user) {
            db.User.create({
                user_id: req.body.user_id,
                user_email: req.body.user_email,
                user_name: req.body.user_name,
                user_password: bcrypt.hashSync(req.body.user_password),
                user_level: req.body.user_level,
                restaurant_name: req.body.restaurant_name,
                isReal: false
            }).then(function(user) {
                passport.authenticate("local", { failureRedirect: "/signup", successRedirect: "/signin" })(req, res, next)
            })
        } else {
            res.send("user exists")
        }
    })
});
//
router.post("/updateAccount", loggedIn, function(req, res, next) {
  console.log(req.body.new_password)
    if (bcrypt.compareSync(req.body.old_password, req.user.user_password)) {
        var updateUser = {
            user_email: req.body.user_email,
            user_name: req.body.user_name,
            user_password: bcrypt.hashSync(req.body.new_password)
        };
        db.User.update(updateUser, {
            where: {
                id: req.user.id
            }
        }).then(function(dbUser) {
            console.log(dbUser);
        });
    }
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

//Keep this at the end of the router section.
//If nothing is found this is sent.
router.get('*', function(req, res) {
    res.status(404).send('404 Page Goes Here');
});

//function for limiting access to logged in user only.
//Sends them back to the login page if not.
function loggedIn(req, res, next) {
    if (req.user) {
        next();
    } else {
        res.redirect('/login');
    }
}
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
