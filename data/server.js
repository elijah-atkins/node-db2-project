const express = require("express");

const CarRouter = require("./carRouter")
const notFound = require("../middleware/404")

const server = express();

server.use(logger)
server.use(express.json());

server.use("/api/cars", CarRouter)


//custom middleware

  function logger(req, res, next) {
    console.log(`Request Method: ${req.method}`);
    console.log(`URL: ${req.url}`);
    console.log(`Timestamp: ${new Date()}`);
    next();
  }
  
  server.use(notFound);
  
  module.exports = server;