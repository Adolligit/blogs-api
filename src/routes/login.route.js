const express = require('express');
const { inputValues } = require('../middleware');
const schema = require('../util/input-validation');
const addRescue = require('../util/add-rescue');
const login = require('../controllers/login.controller');

const route = express();

const postMidArr = [
  inputValues(schema.login),
  login.entry,
];

route.post('/', addRescue(postMidArr));

module.exports = route;