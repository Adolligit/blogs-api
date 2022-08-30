const express = require('express');
const addRescue = require('../util/addRescue');

const user = require('../controllers/user');
const { auth, validates } = require('../middleware');

const route = express();

const postMiddlewares = [
  validates.user.inputValues,
  user.create,
];

route.post('/', addRescue(postMiddlewares));

route.use(auth.CommonUser);
route.get('/', user.all);
route.get('/:id', addRescue(user.byId));

module.exports = route;