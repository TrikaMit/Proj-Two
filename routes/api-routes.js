var db = require('../models')
require('dotenv').config()
var request = require('request')

module.exports = function (app) {
    //tester function to make sure API get works
    app.get("/api/test", function (req, res) {
        res.json("this is a test")
    });
    //displays all users in DB 
    app.get("/api/users", function (req, res) {
        db.User.findAll({
            include: [
                db.Drinks
            ]
        }).then(function (dbUser) {
            res.json(dbUser);
        });
    });
    //displays user based on name, if one exists
    app.get("/api/users/:id", function (req, res) {
        db.User.findOne({
            where: {
                name: req.params.id
            },
            include: [db.Drinks]
        }).then(function (dbUser) {
            res.json(dbUser);
        });
    });
    //displays all drinks in DB 
    app.get("/api/drinks", function (req, res) {
        db.Drinks.findAll({
            
        }).then(function (dbDrinks) {
            res.json(dbDrinks);
        });
    });
    app.get("/api/drinks/:id", function (req, res) {
        db.Drinks.findOne({
            where: {
                id: req.params.id
            },
            include: [db.User]
        }).then(function (dbDrinks) {
            res.json(dbDrinks);
        });
    });

    app.get(`/api/LCBO/:query`, function (req, outer_res) {
        var query = req.params.query
        request(`https://lcboapi.com/products?access_key=${process.env.ACCESS_KEY}&q=${query}`, {
            json: true
        }, (err, res, body) => {
            if (err) {
                return console.log(err)
            }
            console.log(body.result[0].name);
            outer_res.json(body.result[0]);
            // console.log(result);
            // relevant properties:
            // name
            // image_url , image_thumb_url
            // style
        })
    })

};