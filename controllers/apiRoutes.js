const db = require('../models');

//POST route for saving a new User and creating the Profile

module.exports = function (app) {
    app.post("/create", function (req, res) {
        console.log(req.body.email);
        db.User.create({
            first_name: req.body.first_name,
            last_name: req.body.first_name,
            email: req.body.email,
            password: req.body.password

        }).then(function () {
            res.redirect('/home');
        })
    })
};



