const express = require('express');
const route = express.Router();
const adminController = require("../controllers/adminController");

route.post("/", adminController.addGame);

module.exports = route;