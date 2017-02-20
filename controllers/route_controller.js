////////////////////////
//DEPENDENCIES
////////////////////////

var express = require("express");
var path = require('path');
var app = express();
var passport = require('passport');
var db = require("../models");

var router = express.Router();

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

var nodemailer = require('nodemailer');

//node mailer config
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'serverappbeta@gmail.com',
        pass: 'websterdog'
    }
});

var bcrypt = require("bcrypt-nodejs");

////////////////////////
//ROUTES
////////////////////////

router.get("/", function(req, res) {
   res.render("home", req);
});

router.get("/alt", function(req, res) {
res.sendFile(path.join(__dirname, "../public/alt.html"));
});

router.get("/login", function(req, res) {
    res.render("login", req);
});

router.get("/feedback", function(req, res) {
    res.render("feedback", req);
});

router.post("/login", passport.authenticate('local', {
    failureRedirect: '/loginFailure',
    successRedirect: '/shift'
}))

router.get("/signup", function(req, res) {
    res.render("signup", req);
});

router.get("/passwordReset", function(req, res) {
    res.render("passwordReset", req);
});

router.get("/updateAccount", loggedIn, function(req, res, next) {
    res.render("updateAccount", req);
});

//This is now limited to login only.
router.get("/shift", loggedIn, function(req, res, next) {
    res.render("shift", req);
});

router.get("/job", loggedIn, function(req, res, next) {
    res.render("job", req);
});

router.get("/restaurant", loggedIn, function(req, res, next) {
    res.render("restaurant", req);
});

//Logs user out and returns to homepage.
router.get('/logout', loggedIn, function(req, res, next) {
    req.logout();
    res.redirect('/');
});

//Creates a new user.
//They are then redirected to the login page.
router.post("/newUser", function(req, res, next) {
    db.User.findOne({
        where: {
            user_email: req.body.user_email
        }
    }).then(function(user) {
        if (!user) {
            db.User.create({
                user_id: 9000,
                user_email: req.body.user_email,
                user_name: req.body.user_name,
                user_password: bcrypt.hashSync(req.body.user_password),
                user_level: 9001,
                restaurant_name: 'default',
                isReal: false
            }).then(function(err, user, info) {
                res.redirect('/login');
            })
        } else {
            res.send("user exists")
        }
    })
});

//User types in their old password, and can then update any of thier login credintials.
//It then logs them out and asks relog in. This prevents potentional conflicts/exploits.
router.post("/updateAccount", loggedIn, function(req, res, next) {
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
        }).then(function() {
            req.logout();
            res.redirect('/login');
        });
    }
});

//Sends an email to user entered email with a new temporary password.
router.post("/reset", function(req, res, next) {
    //generate temporary password.
    var tempPass = tempPWgenerator()
    console.log(tempPass)
    var reset = {
        user_password: bcrypt.hashSync(tempPass)
    };
    db.User.update(reset, {
        where: {
            user_email: req.body.user_email
        }
    }).then(function() {
          let mailOptions = {
            from: '"Server App Beta" <serverappbeta@gmail.com>', 
            to: req.body.user_email, 
            subject: 'Server App Beta - Password Reset', // Subject line
            text: 'Your password has been reset. Your temporary password is ' + tempPass + '. Please go to http://localhost:8080/login to login and change your password', // plain text body
            html: '<b>Your password has been reset.</b><br><p>Your temporary password is <b>' + tempPass  + '</b><p>Please go to <a href="http://localhost:8080/login">Login</a> to login and create a new password.'
        };
        // send mail with defined transport object
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log('Message %s sent: %s', info.messageId, info.response);
        });
        res.redirect('/login'); //Sends user to login screen for now.
    });
});

router.post("/sendFeedback", function(req, res) {
          let mailOptions = {
            from: '"Server App Beta" <serverappbeta@gmail.com>', 
            to: 'serverappbeta@gmail.com', 
            subject: 'Server App Beta - Feedback', // Subject line
            text: req.body.user_email + " comment: " + req.body.comment,
            html: 'From: ' + req.body.user_email  + '</br><p>' + req.body.comment + '</p>'
        };
        // send mail with defined transport object
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log('Message %s sent: %s', info.messageId, info.response);
        });
        res.redirect('/login'); //Sends user to login screen for now.
    })


router.post("/newShift", loggedIn, function(req, res, next) {
    db.Shift.create({
        restaurant_id: 0,
        user_id: req.user.id,
        shiftDate: req.body.shiftDate,
        timeIn: convertToTime(req.body.inTime),
        timeOut: convertToTime(req.body.outTime),
        shiftType: req.body.shiftType,
        largestTip: req.body.largestTip,
        smallestTip: req.body.smallestTip,
        stiffed: req.body.stiffed,
        bwl: req.body.bwl,
        sales: req.body.sales,
        tipout: req.body.tipout,
        tipPercent: req.body.tipPercent,
        totalWalkedWith: req.body.totalWalkedWith,
        ppa: req.body.ppa,
        comments: req.body.comments,
        breakthroughs: req.body.breakthroughs,
        isReal: false
    }).then(function(dbUser) {
        console.log(dbUser);
        res.render("shiftSuccess");
    });
});

router.post("/newJob", loggedIn, function(req, res, next) {
    db.Job.create({
        restaurant_id: 0,
        user_id: req.user.id,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        wage: req.body.wage,
        isReal: false,
        userJobMenu: 1,
        comments: req.body.comments
    }).then(function(dbUser) {
        console.log(dbUser);
        res.render("jobSuccess");     
    });
});

router.post("/newRestaurant",loggedIn, function(req, res, next) {
    db.Restaurant.create({
        restaurant_id: 0,
        restaurant_name: req.body.restaurant_name,
        defaultMenu: 1,
        isReal: true
    }).then(function(dbUser) {
        console.log(dbUser);
        res.render("restaurantSuccess");
    });
});

router.post("/editShift", function(req, res) {
  var shiftData = req.body;
  console.log(shiftData);
  db.Shift.update(shiftData, {
    where: {id:shiftData.id}
  }).then(function(dbUser) {
    console.log(dbUser);
    res.render("shiftSuccess");
  });
});

router.post("/editJob", function(req, res) {
  var jobData = req.body;
  db.Job.update(jobData, {
    where: {id:jobData.id}
  }).then(function(dbUser) {
    console.log(dbUser);
  });
});

router.post("/editRestaurant", function(req, res) {
  var restaurantData = req.body;
  db.Restaurant.update(restaurantData, {
    where: {id:restaurantData.id}
  }).then(function(dbUser) {
    console.log(dbUser);
  });
});

router.post("/deleteShift", function(req, res) {
  var shiftData = req.body;
  db.Shift.destroy({where: {id: shiftData.id}}).then(function(dbUser) {
    console.log(dbUser);
    alert("Shift deleted!");
  });
});

router.post("/deleteJob", function(req, res) {
  var jobData = req.body;
  db.Job.destroy({where: {id: jobData.id}}).then(function(dbUser) {
    console.log(dbUser);
  });
});

router.post("/deleteRestaurant", function(req, res) {
  var restaurantData = req.body;
  db.Restaurant.destroy({where: {id: restaurantData.id}}).then(function(dbUser) {
    console.log(dbUser);
  });
});

router.post("/shiftByDate", function(req, res) {
  console.log(req.body);

  db.Shift.findAll({where: {shiftDate: req.body.dateToEdit}}).then(function(dbUser) {
    res.json(dbUser);
  });
});

//Testing out a shifts table.
//Added a raw:true option to cut down the garbage.
router.get("/shiftsTable", loggedIn, function(req, res, next) {
    db.Shift.findAll({ where: {user_id: req.user.id},
    raw: true, // Will order by shiftDate on an associated User
     order: [['shiftDate', 'DESC']]}).then(function(dbUser) {
       console.log(dbUser);
       res.render("shiftsTable", dbUser);
     });
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

//This is used to create a temporary password.
function tempPWgenerator() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < 5; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
}

//Converts a number 0-1440 to a xx:xx:xx time.  Returns the time as a string.  Only works if num is divisible by 15.
function convertToTime(num) {
    var string = "";

    if (num / 60 >= 23) {string+="23";}
    else if (num / 60 >= 22) {string+="22";}
    else if (num / 60 >= 21) {string+="21";}
    else if (num / 60 >= 20) {string+="20";}
    else if (num / 60 >= 19) {string+="19";}
    else if (num / 60 >= 18) {string+="18";}
    else if (num / 60 >= 17) {string+="17";}
    else if (num / 60 >= 16) {string+="16";}
    else if (num / 60 >= 15) {string+="15";}
    else if (num / 60 >= 14) {string+="14";}
    else if (num / 60 >= 13) {string+="13";}
    else if (num / 60 >= 12) {string+="12";}
    else if (num / 60 >= 11) {string+="11";}
    else if (num / 60 >= 10) {string+="10";}
    else if (num / 60 >= 9) {string+="09";}
    else if (num / 60 >= 8) {string+="08";}
    else if (num / 60 >= 7) {string+="07";}
    else if (num / 60 >= 6) {string+="06";}
    else if (num / 60 >= 5) {string+="05";}
    else if (num / 60 >= 4) {string+="04";}
    else if (num / 60 >= 3) {string+="03";}
    else if (num / 60 >= 2) {string+="02";}
    else if (num / 60 >= 1) {string+="01";}
    else if (num / 60 >= 0) {string+="00";}

    if (num % 60 === 0) {
        string += ":00:00";
    }
    else if (num % 60 === 15) {
        string += ":15:00";
    }
    else if (num % 60 === 30) {
        string += ":30:00";
    }
    else if (num % 60 === 45) {
        string += ":45:00";
    }

    return string;
}

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