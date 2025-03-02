const express = require("express");
const route = express.Router();

route.use(["/login/admin", "/admin"], require("./adminRoutes"));
route.use("/login/user",require("./userRoutes"));

module.exports = route;