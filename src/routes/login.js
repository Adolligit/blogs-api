const express = require('express');
const rescue = require('express-rescue');

const login = require('../controllers/login');
const { validates } = require('../middleware');
const { errorHandler } = require('../middleware');

const route = express();

route.use(rescue(validates.login.inputValues));

route.post('/', login.entry);

route.use(errorHandler.controller);

module.exports = route;