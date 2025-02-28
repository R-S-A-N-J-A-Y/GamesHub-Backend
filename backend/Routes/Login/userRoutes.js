const express = require("express");
const route = express.Router();
const userController = require("../../controllers/UserController");

route.post("/createuser", userController.createUser);

module.exports = route;