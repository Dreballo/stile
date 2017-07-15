const db = require('../models');

module.exports = function (app){

    //POST route for saving a new User and creating the Profile
    app.post("/register/submit", function(req, res) {
        db.User.create({
            email: req.body.email,
            password: req.body.password

        }).then(console.log(req.body))
    });

};
