const express = require("express");
const routes = express.Router();



routes.get("/home", (req, res) => {
  res.render("about");
});

routes.get("/content", (req, res) => {
  res.render("contents");
});

routes.get("/aulas", (req, res) => {  
  res.render("aulas");
});

routes.use(function(req, res) {
  res.status(404).render("not-found");
});



module.exports = routes;
