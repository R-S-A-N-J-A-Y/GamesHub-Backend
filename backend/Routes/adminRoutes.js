const express = require('express');
const route = express.Router();
const adminController = require("../controllers/adminController");

route.post("/signin", adminController.signin);

route.post("/addgame", adminController.addGame);

module.exports = route;