//=================================================================
// Initialize dependencies
//=================================================================
const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const methodOverride = require("method-override");
const db = require("./models");

//=================================================================
// Express server
//=================================================================
const app = express();
//=================================================================
// Designate a port or listening
//=================================================================
const PORT = process.env.PORT || 8080;

//=================================================================
// Middleware for app and logging
//=================================================================
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//=================================================================
// Configure method-override middleware
//=================================================================
app.use(methodOverride("_method"));

//=================================================================
// Serve Static folder
//=================================================================

app.use(express.static("./build"));

//=================================================================
// Passport Config
//=================================================================
const session = require('express-session');
const passport = require('passport');

require('./config/passport.js')(passport);

app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true})); // express session secret

app.use(passport.initialize());

app.use(passport.session()); // persistent login sessions



//=================================================================
// configure route controller
//=================================================================

require('./controllers/apiRoutes')(app);

//serve app from static file
app.get("/", function(req, res) {
    res.sendFile(__dirname + "/public/index.html");
});

//=================================================================
// Grab env port and start listening on all network interfaces
//=================================================================

db.sequelize.sync({ force: true }).then(function() {
    app.listen(PORT, function() {
        console.log(`App listening on ${PORT}`);
    });
});
