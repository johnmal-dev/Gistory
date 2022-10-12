const express = require("express");
const { fetchUserController } = require("../controllers/get");
const route = express.Router();

const fetchUserRoute = route.get("/api/v1/:user", fetchUserController);

module.exports = { fetchUserRoute };
