// import express
var express = require("express");
var router = express.Router();
const path = require('path');

// import burger.js
var burgers = require("../models/burger");

// create the router for the app and export the router at the end of the file
// get burger.js






router.get("/", function(request, result){
    burgers.all(function(data){
        var unknown1 = {
            burgers: data
        };
        console.log(unknown1);
        result.render("index", unknown);
    })
})
router.post("", function(req, res) {
    // console.log(req.body);
    // burgers.push(req.body); 
})


module.exports = router;