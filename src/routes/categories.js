const express = require('express');
const { auth } = require('../middleware');

const route = express();

route.use(auth.CommonUser);

module.exports = route;