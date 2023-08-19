require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = require('./api');

const server = express();
const port = process.env.API_PORT || 3000;

server.use(express.json());
server.use(cors());

server.use('/v1', app);

server.listen(port, () => console.log(`Running on port ${port}`));
