//SET UP EXPRESS SERVER
var passport = require('passport')
var Strategy = require('passport-local').Strategy;
var express = require('express');
var path = require('path');
var app = express();
var PORT = process.env.PORT || 8080;
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
var bcrypt = require("bcrypt-nodejs")
var db = require("./models");

var routes = require("./controllers/route_controller.js");
var connection = require("./config/connection.js");

app.use(require('cookie-parser')())
app.use(require('express-session')({ secret: 'secretServerApp', resave: false, saveUninitialized: false }))


//Servers all of our static .css and .js files.
//This has to go above the passport stuff, or it will try to 
//validate each request for the static files.
app.use(express.static(path.join(__dirname,'public/assets')));

//Passport stuff
//this only configs passport. If i require it as an external
//file it all goes to hell. It can live here for now.

passport.use(new Strategy(function(user_email, pass, cb){
  var hashedPass = bcrypt.hashSync(pass)
  db.User.findOne({
    where: {
      user_email: user_email
    }
  }).then(function(user, err){
    if (err) { return cb(err); }
    if (!user) { 
    return cb(null, false); }
    if (!bcrypt.compareSync(pass, user.user_password)){ 
      return cb(null, false); }
    return cb(null, user);
  })
}))

passport.serializeUser(function(user, cb) {
  cb(null, user.id);
});

passport.deserializeUser(function(id, cb) {
  db.User.findById(id).then(function (user) {
    cb(null, user);
  });
});

app.use(passport.initialize());
app.use(passport.session());

app.use(function(req,res,next){
  if(req.user){
    res.locals.user = req.user.user_email
  }
  next()
})

//Routes are found in controllers/route_controllers.js
app.use("/", routes);

//LISTENER
db.sequelize.sync().then(function() {
	app.listen(PORT, function() {
		console.log("Listening on port %s", PORT);
	});
})