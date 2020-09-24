const express = require("express");
const path = require("path");

module.exports = function (app) {
  const react = new express.Router();

  react.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../../build", "index.html"));
  });

  return react;
};
