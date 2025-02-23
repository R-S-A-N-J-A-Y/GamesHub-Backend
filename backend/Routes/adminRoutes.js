const express = require('express');
const route = express.Router();
const adminController = require("../controllers/adminController");

route.post("/", adminController.addGame);

route.post("/signin", adminController.signin);

module.exports = route;