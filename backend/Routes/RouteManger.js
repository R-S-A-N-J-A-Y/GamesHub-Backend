const express = require("express");
const route = express.Router();
const Controller = require("../controllers/Controller")

const PController = require("../controllers/platformController");

route.get("/getgame", Controller.getGame);
route.get("/getgameby", Controller.getGameBy);

route.post( "/platform", PController.addPlatform );

route.use(["/login/admin", "/admin"], require("./adminRoutes"));
route.use("/login/user",require("./userRoutes"));

module.exports = route;