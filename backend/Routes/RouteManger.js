const express = require("express");
const route = express.Router();

route.use("/login", require("./Login/LoginManager"));

module.exports = route;