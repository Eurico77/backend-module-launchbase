const express = require("express");
const nunjucks = require("nunjucks");
const routes = require("./routes");

const server = express();

server.use(express.static("public"));
server.use(routes)

server.set("view engine", "html");

nunjucks.configure("src/views", {
  express: server,

});

server.listen(3333, () => {
  console.log("server is running");
});
