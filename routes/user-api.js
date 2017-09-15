var db = require("../models");
var path = require('path');

module.exports = function(app) {
  app.get("/api/user", function(req, res) {
  db.User.findAll({}).then(function(dbUser) {

      res.json(dbUser);
    });
  });


  app.post("/api/authors", function(req, res) {
     // Create an Author with the data available to us in req.body
    console.log(req.body);
    db.User.create(req.body).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  app.delete("/api/user/:id", function(req, res) {
    // Delete the Author with the id available to us in req.params.id
    db.User.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbUser) {
      res.json(dbUser)
 });
});
}