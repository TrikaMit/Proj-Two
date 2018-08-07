var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
  app.get("/index", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index2.html"));
  });
  app.get("/drinks", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/top-drinks.html"));
  });
  app.get("/users", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/user-top-shelf.html"));
  });


};
