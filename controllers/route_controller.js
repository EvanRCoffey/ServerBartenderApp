//
//////////////////////////////////////////////////////////////////////////////
//DEPENDENCIES
//////////////////////////////////////////////////////////////////////////////
//

var express = require("express");
var path = require('path');
var app = express();
var passport = require('passport');
var db = require("../models");

var router = express.Router();

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({
    extended: false,
    parameterLimit: 1000000,
    limit: 1024 * 1024 * 10
}));
app.use(bodyParser.json({
    extended: false,
    parameterLimit: 1000000,
    limit: 1024 * 1024 * 10
}));

var moment = require('moment');

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

//
//////////////////////////////////////////////////////////////////////////////
//SITE NAVIGATION
//////////////////////////////////////////////////////////////////////////////
//

router.get("/", function(req, res) {
    res.render("home", req);
});

router.get("/login", function(req, res) {
    res.render("login", req);
});

router.get("/feedback", function(req, res) {
    res.render("feedback", req);
});

router.get("/loginFailure", function(req, res) {
    res.render("loginFailure", req);
});

router.get("/signup", function(req, res) {
    res.render("signup", req);
});

router.get("/passwordReset", function(req, res) {
    res.render("passwordReset", req);
});

router.get("/updateAccount", loggedIn, function(req, res, next) {
    res.render("updateAccount", req);
});

router.get("/shift", loggedIn, function(req, res, next) {
    db.Job.findAll({ where: { UserId: req.user.id } }).then(function(dbUser) {
        var dataObject = {
            jobs: dbUser
        };
        res.render("shift", dataObject);
    });
});

router.get("/job", loggedIn, function(req, res, next) {
    res.render("job", req);
});

router.get("/goal", loggedIn, function(req, res, next) {
    res.render("goal", req);
});

router.get("/myShifts", loggedIn, function(req, res, next) {
    db.Shift.findAll({
        where: { UserId: req.user.id },
        include: [db.Job],
        raw: false, // Will order by shiftDate on an associated User
        order: [
            ['shiftDate', 'DESC']
        ]
    }).then(function(dbUser) {
        var dataObject = {
            allShifts: dbUser
        };

        //Hideous loop that converts the UTC time in the DB to a more readable format.
        for (var i = 0; i < dataObject.allShifts.length; i++) {
            dataObject.allShifts[i].shiftDate = moment.utc(dataObject.allShifts[i].shiftDate).add(18, 'hours').format('ll')
            dataObject.allShifts[i].timeIn = moment(dataObject.allShifts[i].timeIn, 'hh:mm:ss').format('h:mm A')
            dataObject.allShifts[i].timeOut = moment(dataObject.allShifts[i].timeOut, 'hh:mm:ss').format('h:mm A')
        }
        // moment().format('MMMM Do YYYY, h:mm:ss a');

        res.render("myShifts", dataObject);
    });
});

router.get("/myJobs", loggedIn, function(req, res, next) {
    db.Job.findAll({ where: { UserId: req.user.id } }).then(function(dbUser) {
        var dataObject = {
            allJobs: dbUser
        };
        //Hideous loop that converts the UTC time in the DB to a more readable format.
        for (var i = 0; i < dataObject.allJobs.length; i++) {
            dataObject.allJobs[i].startDate = moment.utc(dataObject.allJobs[i].startDate).add(18, 'hours').format('ll')
        }
        res.render("myJobs", dataObject);
    });
});

router.get("/myGoals", loggedIn, function(req, res, next) {
    db.Goal.findAll({ where: { UserId: req.user.id } }).then(function(dbUser) {
        var dataObject = {
            allGoals: dbUser
        };
        //Hideous loop that converts the UTC time in the DB to a more readable format.
        for (var i = 0; i < dataObject.allGoals.length; i++) {
            dataObject.allGoals[i].goalDeadline = moment.utc(dataObject.allGoals[i].goalDeadline).add(18, 'hours').format('ll')
        }
        res.render("myGoals", dataObject);
    });
});

router.get("/dashboard", loggedIn, function(req, res, next) {
    res.render("dashboard", req);
});

router.get("/financialSummary", loggedIn, function(req, res, next) {
    res.render("financialSummary", req);
});

// Grabs a shift with a given id, for use with shift editor
router.get("/editShift:id", loggedIn, function(req, res, next) {
    db.sequelize.Promise.all([
        db.Shift.findAll({
            where: { id: req.params.id }
        }),
        db.Job.findAll({
            where: { UserId: req.user.id },
        })
    ])
    .spread(function(shift, jobs) {
        //Reformat before sending to Render
        shift[0].shiftDate = moment(shift[0].shiftDate).add(18, 'hours').format('YYYY-MM-DD')
        shift[0].timeIn = moment(shift[0].timeIn, 'hh:mm:ss').format('h:mm A')
        shift[0].timeOut = moment(shift[0].timeOut, 'hh:mm:ss').format('h:mm A')
        var dataObject = {
            shift: shift[0],
            job: jobs
        }
        res.render("shiftEditor", dataObject)
    });
});

//Grabs a job with a given id
router.get("/editJob:id", loggedIn, function(req, res, next) {
    var JobID = req.params.id;
    db.Job.findAll({
        where: { UserId: req.user.id, id: JobID },
        raw: true
    }).then(function(dbUser) {
        var date = moment(dbUser[0].startDate).add(18, 'hours').format('YYYY-MM-DD')
        dbUser[0].startDate = date
        var date2 = moment(dbUser[0].endDate).add(18, 'hours').format('YYYY-MM-DD')
        dbUser[0].endDate = date2
        res.render("jobEditor", dbUser[0]);
    });
});

//Grabs a goal with a given id
router.get("/editGoal:id", loggedIn, function(req, res, next) {
    //Called when you grab a goal with a provided ID, for use with goal editor
    var GoalID = req.params.id;
    db.Goal.findAll({
        where: { UserId: req.user.id, id: GoalID },
        raw: true
    }).then(function(dbUser) {
        var date = moment(dbUser[0].goalDeadline).add(18, 'hours').format('YYYY-MM-DD');
        dbUser[0].goalDeadline = date;
        res.render("goalEditor", dbUser[0]);
    });
});

router.get("/quizMaker", loggedIn, function(req, res, next) {
    db.Job.findAll({ where: { UserId: req.user.id } }).then(function(dbUser) {
        var dataObject = {
            jobs: dbUser
        };
        res.render("quizMaker", dataObject);
    });
});

router.get("/flashCards", loggedIn, function(req, res, next) {
    db.Job.findAll({ where: { UserId: req.user.id } }).then(function(dbUser) {
        var dataObject = {
            jobs: dbUser
        };
        res.render("flashCards", dataObject);
    });
});

router.get("/menuBuilder", loggedIn, function(req, res, next) {
    db.Job.findAll({ where: { UserId: req.user.id } }).then(function(dbUser) {
        var dataObject = {
            jobs: dbUser
        };
        res.render("menuBuilder", dataObject);
    });
});

//Logs user out and returns to homepage.
router.get('/logout', loggedIn, function(req, res, next) {
    req.logout();
    res.redirect('/');
});

//
//////////////////////////////////////////////////////////////////////////////
//LOGIN/EMAIL STUFF
//////////////////////////////////////////////////////////////////////////////
//

//Attempts to login.  One path for success and one for failure.
router.post("/login", passport.authenticate('local', {
    failureRedirect: '/loginFailure',
    successRedirect: '/dashboard'
}))

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
                user_email: req.body.user_email,
                user_name: req.body.user_name,
                user_password: bcrypt.hashSync(req.body.user_password),
                user_level: 1,
                restaurant_name: 'default',
                isReal: false
            }).then(function(err, user, info) {
                req.message = "User created successfully!";  
                res.render('login', req);
            })
        } else {
            res.send("user exists")
        }
    })
});

//User types in their old password, and can then update any of thier login credintials.
//It then logs them out and asks relog in. This prevents potentional conflicts/exploits.
router.post("/updateAccount", loggedIn, function(req, res, next) {
    if (isOkPass(req.body.new_password)) {
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
        else {
            req.message = 'Incorrect password entered for your current password'
            res.render("updateAccount", req);
        }
    }
    else {
        req.message = 'Password must be 8 or more characters and have 1 lowercase, 1 uppercase, 1 number, and 1 special character.'
        res.render("updateAccount", req); 
    }
});

//Sends an email to user entered email with a new temporary password.
router.post("/reset", function(req, res, next) {
    //generate temporary password.
    var tempPass = tempPWgenerator()
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
            html: '<b>Your password has been reset.</b><br><p>Your temporary password is <b>' + tempPass + '</b><p>Please go to <a href="http://localhost:8080/login">Login</a> to login and create a new password.'
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

//Nodemailer function for feedback page
router.post("/sendFeedback", function(req, res) {
    let mailOptions = {
        from: '"Server App Beta" <serverappbeta@gmail.com>',
        to: 'serverappbeta@gmail.com',
        subject: 'Server App Beta - Feedback', // Subject line
        text: req.body.user_email + " comment: " + req.body.comment,
        html: 'From: ' + req.body.user_email + '</br><p>' + req.body.comment + '</p>'
    };
    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
    });
    var dataObject = {
        message: "Feedback sent successfully"
    };
    res.render("dashboard", dataObject);
})

//
//////////////////////////////////////////////////////////////////////////////
//CRUD
//////////////////////////////////////////////////////////////////////////////
//

router.post("/newShift", loggedIn, function(req, res, next) {
    if (req.body.shiftType === "") { req.body.shiftType = null }
    if (req.body.largestTip === "") { req.body.largestTip = null }
    if (req.body.smallestTip === "") { req.body.smallestTip = null }
    if (req.body.stiffed === "") { req.body.stiffed = null }
    if (req.body.bwl === "") { req.body.bwl = null }
    if (req.body.tipout === "") { req.body.tipout = null }
    if (req.body.tipPercent === "") { req.body.tipPercent = null }
    if (req.body.ppa === "") { req.body.ppa = null }
    if (req.body.comments === "") { req.body.comments = null }
    if (req.body.breakthroughs === "") { req.body.breakthroughs = null }
    if (req.body.shiftDate === "") { req.body.shiftDate = "2017-01-01" }

    db.Shift.create({
        shiftDate: req.body.shiftDate,
        timeIn: req.body.inTime,
        timeOut: req.body.outTime,
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
        isReal: false,
        JobId: req.body.job_id,
        UserId: req.user.id
    }).then(function(dbUser) {
        db.Job.findAll({ where: { UserId: req.user.id } }).then(function(dbUser) {
            var dataObject = {
                jobs: dbUser
            };
            dataObject.message = 'Shift Added'
            res.render("dashboard", dataObject);
        });
    });
});

router.post("/newJob", loggedIn, function(req, res, next) {
    if (req.body.endDate === "") {
        db.Job.create({
            UserId: req.user.id,
            job_name: req.body.job_name,
            startDate: req.body.startDate,
            wage: req.body.wage,
            isReal: false,
            stillWorkingHere: true,
            comments: req.body.comments
        }).then(function(dbUser) {
            var dataObject = {
                message: 'Job Added'
            }
            res.render("dashboard", dataObject);
        });
    } else {
        db.Job.create({
            UserId: req.user.id,
            job_name: req.body.job_name,
            startDate: req.body.startDate,
            endDate: req.body.endDate,
            wage: req.body.wage,
            isReal: false,
            stillWorkingHere: false,
            comments: req.body.comments
        }).then(function(dbUser) {
            var dataObject = {
                message: 'Job Added'
            }
            res.render("dashboard", dataObject);
        });
    }
});

router.post("/newGoal", loggedIn, function(req, res, next) {
    //Called when you post a new goal
    var goalStatus = {
        completed: false,
        abandoned: false,
        extended: false,
        modified: false
    }
    db.Goal.create({
        UserId: req.user.id,
        goalName: req.body.goalName,
        goalDeadline: req.body.goalDeadline,
        goalStatus: goalStatus,
        goalText: req.body.goalText,
        comments: req.body.comments,
        isReal: false
    }).then(function(dbUser) {
        var dataObject = {
            message: 'Goal Added'
        }
        res.render("dashboard", dataObject);
    });
});

router.post("/newMenu", loggedIn, function(req, res, next) {
    db.Menu.create({
        menuName: req.body.menuName,
        comments: req.body.comments,
        menuJSON: req.body.menuJSON,
        criJSON: req.body.criJSON,
        UserId: req.user.id,
        JobId: req.body.JobId
    }).then(function(dbUser) {
        res.json(dbUser.dataValues.id);
    });
});

router.post("/editShift", loggedIn, function(req, res, next) {
    var shiftData = req.body;
    db.Shift.update(shiftData, {
        where: { id: shiftData.shiftID }
    }).then(function(dbUser) {
        var dataObject = {
            message: 'Shift Updated'
        }
        res.render("dashboard", dataObject);
    });
});

router.post("/editJob", loggedIn, function(req, res, next) {
    var jobData = req.body;
    if (jobData.endDate === "") {
        jobData.stillWorkingHere = true;
        delete jobData.endDate;
        db.Job.update(jobData, { where: { id: jobData.jobIdHidden } }).then(function(dbUser) {
            var dataObject = {
                message: 'Job Updated'
            }
            res.render("dashboard", dataObject);
        });
    } else {
        jobData.stillWorkingHere = false;
        db.Job.update(jobData, { where: { id: jobData.jobIdHidden } }).then(function(dbUser) {
            var dataObject = {
                message: 'Job Updated'
            }
            res.render("dashboard", dataObject);
        });
    }
});

router.post("/editGoal", loggedIn, function(req, res, next) {
    //Called when you edit an existing goal
    var goalData = req.body;

    if (goalData.goalStatusNumber === '1') {
        var goalStatus = { completed: true, abandoned: false, extended: false, modified: false }
    }
    if (goalData.goalStatusNumber === '2') {
        var goalStatus = { completed: false, abandoned: true, extended: false, modified: false }
    }
    if (goalData.goalStatusNumber === '3') {
        var goalStatus = { completed: false, abandoned: false, extended: true, modified: false }
    }
    if (goalData.goalStatusNumber === '4') {
        var goalStatus = { completed: false, abandoned: false, extended: false, modified: true }
    }

    goalData.goalStatus = goalStatus;

    db.Goal.update(goalData, { where: { id: goalData.goalIdHidden } }).then(function(dbUser) {
        var dataObject = {
            message: 'Goal Updated'
        }
        res.render("dashboard", dataObject);
    });

    // db.Goal.update({comments: goalData.comments, goalStatus: goalData.goalStatus}, {where: {id:goalData.goalIdHidden}}).then(function(dbUser) {
    //     var dataObject = {
    //         message: 'Goal Updated'
    //     }
    //     res.render("dashboard", dataObject);     
    // });
});

router.post("/updateMenu", loggedIn, function(req, res, next) {

    var menuObject = {
        menuName: req.body.menuName,
        comments: req.body.comments,
        menuJSON: req.body.menuJSON,
        criJSON: req.body.criJSON,
    }

    db.Menu.update(menuObject, {
        where: { id: req.body.menuID }  //menuId is coming from the global variable in menuBuilder.js
    }).then(function(dbUser) {});
});

router.post("/deleteShift:id", loggedIn, function(req, res, next) {
    var ShiftID = req.params.id;
    db.Shift.destroy({ where: { UserId: req.user.id, id: ShiftID } }).then(function(dbUser) {
        res.redirect('/myShifts')
    });
});

router.post("/deleteJob:id", loggedIn, function(req, res, next) {
    var JobID = req.params.id;
    db.Job.destroy({ where: { UserId: req.user.id, id: JobID } }).then(function(dbUser) {
        res.redirect('/myJobs');
    });
});

router.post("/deleteGoal:id", loggedIn, function(req, res, next) {
    //Called when you delete a shift with a provided ID
    var GoalID = req.params.id;
    db.Goal.destroy({ where: { UserId: req.user.id, id: GoalID } }).then(function(dbUser) {
        res.redirect('/myGoals');
    });
});

//
//////////////////////////////////////////////////////////////////////////////
//GETTERS
//////////////////////////////////////////////////////////////////////////////
//

//Grabs all shifts for logged in user
router.get("/allShifts", loggedIn, function(req, res, next) {
    db.Shift.findAll({ where: { UserId: req.user.id } }).then(function(dbUser) {
        res.json(dbUser);
    });
});

//Grabs all jobs for logged in user
router.get("/allJobs", loggedIn, function(req, res, next) {
    db.Job.findAll({ where: { UserId: req.user.id } }).then(function(dbUser) {
        res.json(dbUser);
    });
});

//Grabs all goals for logged in user
router.get("/allGoals", loggedIn, function(req, res, next) {
    db.Goal.findAll({ where: { UserId: req.user.id } }).then(function(dbUser) {
        res.json(dbUser);
    });
});

//Also grabs all goals for logged in user but is formatted differently
router.get("/goals", loggedIn, function(req, res, next) {
    db.Goal.findAll({ where: { UserId: req.user.id }, order: '"goalDeadline" DESC' }).then(function(dbUser) {
        var dataObject = {
            allGoals: dbUser
        };
        //Hideous loop that converts the UTC time in the DB to a more readable format.
        for (var i = 0; i < dataObject.allGoals.length; i++) {
            dataObject.allGoals[i].goalDeadline = moment.utc(dataObject.allGoals[i].goalDeadline).add(18, 'hours').format('ll')
        }
        res.json(dataObject);
    });
});

//Gets all goals, shifts, and jobs for logged in user
router.get("/goalsAndShiftsAndJobs", loggedIn, function(req, res, next) {
    db.Goal.findAll({ where: { UserId: req.user.id }, order: '"goalDeadline" DESC' }).then(function(dbUser) {
        var dataObject = {
            allGoals: dbUser
        };
        //Hideous loop that converts the UTC time in the DB to a more readable format.
        for (var i = 0; i < dataObject.allGoals.length; i++) {
            dataObject.allGoals[i].goalDeadline = moment.utc(dataObject.allGoals[i].goalDeadline).add(18, 'hours').format('ll')
        }

        db.Shift.findAll({ where: { UserId: req.user.id }, order: '"shiftDate" DESC' }).then(function(dbUser2) {
            dataObject.allShifts = dbUser2;
            //Hideous loop that converts the UTC time in the DB to a more readable format.
            for (var i = 0; i < dataObject.allShifts.length; i++) {
                dataObject.allShifts[i].shiftDate = moment.utc(dataObject.allShifts[i].shiftDate).add(18, 'hours').format('ll')
            }

            db.Job.findAll({ where: { UserId: req.user.id }, order: '"startDate" DESC' }).then(function(dbUser3) {
                dataObject.allJobs = dbUser3;
                res.json(dataObject);
            })
        });
    });
});

//NOT WORKING AS A GET, ONLY AS A POST
//Grabs a menu with a given id
router.post("/getMenu", loggedIn, function(req, res, next) {
    db.Menu.findOne({ where: { id: req.body.menuId } }).then(function(dbUser) {
        res.json(dbUser);
    });
});

//NOT WORKING AS A GET, ONLY AS A POST
//Grabs all menus for a given job
router.post("/getMenusGivenJob", loggedIn, function(req, res, next) {
    db.Menu.findAll({ where: { JobID: req.body.jobId } }).then(function(dbUser) {
        res.json(dbUser);
    })
});

//
//////////////////////////////////////////////////////////////////////////////
//MISCELLANEOUS
//////////////////////////////////////////////////////////////////////////////
//

//Keep this at the end of the router section.
//If nothing is found this is sent.
router.get('*', function(req, res) {
    res.status(404).send('404 Page Goes Here');
});

// Export routes for server.js to use.
module.exports = router;

//
//////////////////////////////////////////////////////////////////////////////
//HELPER FUNCTIONS
//////////////////////////////////////////////////////////////////////////////
//

//function for limiting access to logged in user only.
//Sends them back to the login page if not.
function loggedIn(req, res, next) {
    if (req.user) {
        next();
    } else {
        res.redirect('/login');
    }
}

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

    if (num / 60 >= 23) { string += "23"; } else if (num / 60 >= 22) { string += "22"; } else if (num / 60 >= 21) { string += "21"; } else if (num / 60 >= 20) { string += "20"; } else if (num / 60 >= 19) { string += "19"; } else if (num / 60 >= 18) { string += "18"; } else if (num / 60 >= 17) { string += "17"; } else if (num / 60 >= 16) { string += "16"; } else if (num / 60 >= 15) { string += "15"; } else if (num / 60 >= 14) { string += "14"; } else if (num / 60 >= 13) { string += "13"; } else if (num / 60 >= 12) { string += "12"; } else if (num / 60 >= 11) { string += "11"; } else if (num / 60 >= 10) { string += "10"; } else if (num / 60 >= 9) { string += "09"; } else if (num / 60 >= 8) { string += "08"; } else if (num / 60 >= 7) { string += "07"; } else if (num / 60 >= 6) { string += "06"; } else if (num / 60 >= 5) { string += "05"; } else if (num / 60 >= 4) { string += "04"; } else if (num / 60 >= 3) { string += "03"; } else if (num / 60 >= 2) { string += "02"; } else if (num / 60 >= 1) { string += "01"; } else if (num / 60 >= 0) { string += "00"; }

    if (num % 60 === 0) {
        string += ":00:00";
    } else if (num % 60 === 15) {
        string += ":15:00";
    } else if (num % 60 === 30) {
        string += ":30:00";
    } else if (num % 60 === 45) {
        string += ":45:00";
    }

    return string;
}

//Validates passwords for complexity
function isOkPass(p){
    var anUpperCase = /[A-Z]/;
    var aLowerCase = /[a-z]/; 
    var aNumber = /[0-9]/;
    var aSpecial = /[!|@|#|$|%|^|&|*|(|)|-|_]/;

    if(p.length < 8){
        return false;
    }

    var numUpper = 0;
    var numLower = 0;
    var numNums = 0;
    var numSpecials = 0;
    for(var i=0; i<p.length; i++){
        if(anUpperCase.test(p[i]))
            numUpper++;
        else if(aLowerCase.test(p[i]))
            numLower++;
        else if(aNumber.test(p[i]))
            numNums++;
        else if(aSpecial.test(p[i]))
            numSpecials++;
    }

    if(numUpper < 1 || numLower < 1 || numNums < 1 || numSpecials <1){
        return false;
    }
    return true;
}