const express = require('express');
const addRescue = require('../util/addRescue');

const login = require('../controllers/login');
const { validates } = require('../middleware');
const { errorHandler } = require('../middleware');

const route = express();

const postMidArr = [
  validates.login.inputValues,
  login.entry,
];

route.post('/', addRescue(postMidArr));

route.use(errorHandler.controller);

module.exports = route;