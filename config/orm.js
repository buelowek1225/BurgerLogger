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
  updateOne: function(burger, devoured, id, cb){
    var queryString = "UPDATE burgers SET burger_name= ?, devoured= ? WHERE id= ?";
    connection.query(queryString, [burger, devoured, id], function(err, result) {
      if (err) throw err;
      // console.log(result);
      cb(result);
    })
  },
}


module.exports = orm;