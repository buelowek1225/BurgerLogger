var mysql = require("mysql");
var connection;

// copied code
if(process.env.JAWSD_URL) {
  connection = mysql.createConnection(process.env.JAWSD_URL);
} else{
  connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "burger_db"
  })
};

// ================my code====================
// var connection = mysql.createConnection({
//   host: "localhost",
//   port: 3306,
//   user: "root",
//   password: "root",
//   database: "burger_db"
// });

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
