const express = require('express');
const addRescue = require('../util/add-rescue');

const login = require('../controllers/login.controller');
const { validates } = require('../middleware');

const route = express();

const postMidArr = [
  validates.login.inputValues,
  login.entry,
];

route.post('/', addRescue(postMidArr));

module.exports = route;