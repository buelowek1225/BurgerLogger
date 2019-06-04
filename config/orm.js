var connection = require("./connection.js");

// orm is object, 'select all' is the property, value of property is a function
// key: value
var orm = {
  selectAll: function(burgers, cb){
    var queryString = "SELECT * FROM ??";
    connection.query(queryString, [burgers], function(err, result) {
      if (err) throw err;
      // console.log(result);
      cb(result);
    })
  },
  insertOne: function(newBurger, cb){
    var queryString = "INSERT INTO burgers (burger_name, devoured) VALUES (?, false)";
    connection.query(queryString, [newBurger], function(err, result) {
      if (err) throw err;
      // console.log(result);
      cb(result);
    })
  },
  updateOne: function(id, cb){
    var queryString = "UPDATE burgers SET devoured = true WHERE id = ?";
    connection.query(queryString, [id], function(err, result) {
      if (err) throw err;
      // console.log(result);
      cb(result);
    })
  },
}


module.exports = orm;