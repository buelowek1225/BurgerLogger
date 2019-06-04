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



router.put("/api/burgers/:id", function(req, res) {
    // got to the request '/api/burgers/' get id
    console.log(req.params.id)
    burger.updateOne(req.params.id, function(result){
        if (result.changedRows === 0) {
            // if no rows were changed, then the id must not exist, so 404
            return res.status(404).end();
        }
        res.status(200).end();
    })
  });




// Export routes for server.js to use.
module.exports = router;
