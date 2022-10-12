// GENERAL
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config();
const path = require("path");
const app = express();

// MIDDLEWARES
app.use(express.json());
app.use(cors({ origin: "*" }));
app.use(morgan("dev"));
app.use(express.static(path.resolve(__dirname, "../client/build")));

// ROUTES
const { fetchUserRoute } = require("./routes/get");

// PERSONAL MIDDLEWARES
app.use("/", fetchUserRoute);

// UNIVERSAL
app.get("*", (req, res) => {
  res.sendFile(
    express.static(path.resolve(__dirname, "../client/build", "index.html"))
  );
});

module.exports = app;
