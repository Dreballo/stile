//=================================================================
// Initialize dependencies
//=================================================================
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var methodOverride = require("method-override");
var db = require("./models");

//=================================================================
// Express server
//=================================================================
var app = express();
//=================================================================
// Designate a port or listening
//=================================================================
var PORT = process.env.PORT || 3000;

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

app.use(express.static("./public"));

//=================================================================
// configure route controller
//=================================================================

require('./controllers/apiRoutes');


//=================================================================
// Grab env port and start listening on all network interfaces
//=================================================================

db.sequelize.sync({ force: true }).then(function() {
    app.listen(PORT, function() {
        console.log(`App listening on ${PORT}`);
    });
});
