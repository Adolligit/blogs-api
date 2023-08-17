const express = require('express');
const addRescue = require('../helpers/add-rescue');
const userController = require('../controllers/user.controller');
const { auth, inputValues } = require('../middleware');
const schema = require('../util/input-validation');

const route = express();

const postMiddlewares = [
  inputValues(schema.user),
  userController.create,
];

route.post('/', addRescue(postMiddlewares));

route.use(auth.CommonUser);
route.get('/', userController.all);
route.get('/:id', addRescue(userController.byId));

module.exports = route;