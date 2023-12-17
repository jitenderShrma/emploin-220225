const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();
const config = require("./config/keys");
const routes = require("./routes");



// connect to db
require("./config/db")();

const server = express();


server.use(bodyParser.json());

server.use('/', routes);

const port = config.port;
server.listen(port, () => console.log(`Server listen at port: ${port}`));


