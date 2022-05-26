const express = require("express");
const app = express();
const routers = require("./routers");
const requestParser = require("./middleware/requestParser");

app.get("/", function (req, res) {
  res.json("Mind Shelf Serve v2 Project");
});

app.use(requestParser.fadabParser);

app.use((req, res, next) => {
  res.send("404 NOT FOUND");
});

module.exports = app;
