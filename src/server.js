require('dotenv').config();
const express = require('express');
const routes = require('./api');

const server = express();
const port = process.env.API_PORT || 3000;

server.use('/v1', routes);
server.listen(port, () => console.log(`Running on port ${port}`));
