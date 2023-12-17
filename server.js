const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
require("dotenv").config();
const config = require("./config/keys");
const routes = require("./routes");
const keys = require("./config/keys");

require("./config/db")(); // connect to db

const server = express(); // init server

const allowedOrigins = [keys.allowHost];
const allowedMethods = ['GET'];
const corsOptions = {
    origin: function (origin, callback) {
        if (keys.nodeEnv === 'development') {
            callback(null, true);
        } else {
            if (!origin || allowedOrigins.includes(origin)) {
                callback(null, true);
            } else {
                callback(new Error('Not allowed by CORS'));
            }
        }
    },
    methods: allowedMethods,
};
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    message: 'Too many requests from this IP, please try again later.',
});

server.use(cors(corsOptions)); // CORS security
server.use(limiter); // rate limit
server.use(bodyParser.json());
if (keys.nodeEnv === 'development') {
    server.use(morgan('dev')); // API log
}

server.use('/', routes);

const port = config.port;
server.listen(port, () => console.log(`Server listen at port: ${port}`));


