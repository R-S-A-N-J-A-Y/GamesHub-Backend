const express = require("express");
const route = express.Router();
const Controller = require("../controllers/Controller")

route.get("/getgame", Controller.getGame)

route.use(["/login/admin", "/admin"], require("./adminRoutes"));
route.use("/login/user",require("./userRoutes"));

module.exports = route;