var connection = require("./connection.js");

var orm = {
  selectAll: function(burgers){
    var queryString = "SELECT * FROM ??";
    connection.query(queryString, [burgers], function(err, result) {
      if (err) throw err;
      console.log(result);
    })
  },
  insertOne: function(burgers){
    var queryString = "INSERT INTO" + burgers;
    connection.query(queryString, [newBurger, fa], function(err, result) {
      if (err) throw err;
      console.log(result);
    })
  },
  updateOne: function(burger, devoured){
    var queryString = "UPDATE burgers SET burger_name= ?, devoured= ? WHERE id= ?";
    connection.query(queryString, [burger, devoured], function(err, result) {
      if (err) throw err;
      console.log(result);
    })
  },
}


module.exports = orm;

