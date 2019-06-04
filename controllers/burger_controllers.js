var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burger = require("../models/burger");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        console.log(data);
        var allBurgers = {
          allBurgers: data
        };
        // console.log(hbsObject);
        // taking result and sending it to the "index handlebar"
        res.render("index", allBurgers);
      });



});

router.post("/api/burgers", function(req, res){
    // console.log(req);
    burger.insertOne(req.body.name, function(result) {
        res.json({id: result.insertId});
        location.reload();
    });
})
// Export routes for server.js to use.
module.exports = router;
