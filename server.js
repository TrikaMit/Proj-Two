require('dotenv').config();
var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var PORT = process.env.PORT || 8080;
var request = require('request');
// var db = require("./models");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));
 
var query = "Mill+Street+Organic"
request(`https://lcboapi.com/products?access_key=${process.env.ACCESS_KEY}&q=${query}`, { json: true }, (err, res, body) => {
  if (err) { return console.log(err); }
  console.log(body.result[0]);
});

// db.sequelize.sync({ force: true }).then(function () {
//     app.listen(PORT, function () {
//         console.log("App listening on PORT " + PORT);
//     });
// });
