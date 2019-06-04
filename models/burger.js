// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");


var burger = {
  selectAll: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  insertOne: function(newBurger, cb) {
    orm.insertOne(newBurger, function(res) {
      cb(res);
    });
  },
  updateOne: function(burger, devoured, id, cb) {
    orm.updateOne(burger, devoured, id, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;
