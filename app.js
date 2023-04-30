let express = require("express");
let app = express();
var bp = require("body-parser");

app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

//import routes
let indexRoute = require("./routes/index.js");

//register route
app.use("/", indexRoute);

module.exports = app;
