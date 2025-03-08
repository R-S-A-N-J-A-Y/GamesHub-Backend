const express = require('express');
const route = express.Router();
const adminController = require("../controllers/adminController");

route.post("/signin", adminController.signin);

route.post("/addgame", adminController.addGame);

route.get("/getGameById/:id", adminController.getGameById);

route.delete("/deleteGameById/:id", adminController.deleteGameById);

route.put("/updateGame/:id", adminController.updateGameById);

module.exports = route;