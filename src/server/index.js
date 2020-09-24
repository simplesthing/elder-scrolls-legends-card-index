"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const morgan = require("morgan");
const router = require("./router");
const http = require("http");
const path = require("path");
const cors = require("cors");

class Server {
  constructor(config) {
    const app = (this.app = express());
    this.config = app.config = config;
  }

  start(done) {
    const app = this.app;

    app.disable("x-powered-by");
    app.set("query parser", "simple");

    app.use(helmet({ contentSecurityPolicy: false }));

    app.use(cors());
    app.options("*", cors());

    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    app.use(morgan("combined"));

    app.use(express.static(path.join(__dirname, "../../build")));

    router(app);

    this.server = http.createServer(app);
    this.server.on("clientError", (req, socket) =>
      socket.end("HTTP/1.1 400 Bad Request\r\n\r\n")
    );
    if (done) {
      this.server.listen(this.config.port, done);
    }
  }
}

module.exports = Server;
