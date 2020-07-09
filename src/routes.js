const express = require("express");
const routes = express.Router();




routes.get("/home", (req, res) => {
  res.render("index");
});

routes.get("/contents", (req, res) => {
  res.render("contents");
});

module.exports = routes;
