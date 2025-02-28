const express = require("express");
const route = express.Router();

route.use("/admin", require("./adminRoutes"));
route.use("/user", require("./userRoutes"));

module.exports = route;