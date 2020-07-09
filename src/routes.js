const express = require("express");
const routes = express.Router();




routes.get("/home", (req, res) => {
  res.render("index");
});

routes.get("/content", (req, res) => {
  res.render("contents");
});

routes.get("/aulas", (req, res) =>{
    res.render("aulas")
})

module.exports = routes;
