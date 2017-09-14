var path = require("path");

module.exports = function(app) {

  app.get("/home", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/DashboardViews/pages/UserView.html"));
  });
    app.get("/admin", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/DashboardViews/pages/AdminView.html"));
  });

  // app.get("/addshop", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/views/addshop.html"));
  // });

  // app.get("/myshop/:id", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/views/myshop.html"));
  // });
}

