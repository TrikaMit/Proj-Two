require('dotenv').config();
var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var PORT = process.env.PORT || 8080;
var db = require("./models");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));

// //LCBO API
var query = "this will be our query"
$.ajax({
    url: 'https://lcboapi.com/products?q=' + query,
    method: 'GET',
    headers: {
        'Authorization': `Token ${process.env.ACCESS_KEY}`
    }
}).then(response => {
    console.log(response)
});

console.log(process.env.ACCESS_KEY)

db.sequelize.sync({ force: true }).then(function () {
    app.listen(PORT, function () {
        console.log("App listening on PORT " + PORT);
    });
});
