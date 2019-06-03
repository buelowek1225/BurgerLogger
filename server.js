// ===============================boiler plate=======================================
const express = require('express');

// port
const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// forces my app to look in the public folder first static command/function
app.use(express.static("app/public"));

// ===============================end boiler plate=======================================

// if I don't find the reference in the public folder look at the path and return the relative htmls
// require("./app/routing/apiRoutes")(app);

require("../burger/public/")





// ===============================boiler plate=======================================

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});
// ===============================end boiler plate=======================================
