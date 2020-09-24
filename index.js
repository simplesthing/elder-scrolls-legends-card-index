#!/usr/bin/env node

const config = {
  port: 8081,
};

const Server = require("./src/server/index");

const server = new Server(config);

server.start((err) => {
  if (err) {
    process.exit();
  }
  console.log(`App started and listening at ${config.port}`);
});
