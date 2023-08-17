const express = require('express');
const { auth, inputValues } = require('../middleware');
const schema = require('../util/input-validation');
const categoryController = require('../controllers/category.controller');
const addRescue = require('../util/add-rescue');

const route = express();

const postMidArr = [
  inputValues(schema.category),
  categoryController.create,
];

route.use(auth.CommonUser);
route.post('/', addRescue(postMidArr));
route.get('/', categoryController.all);

module.exports = route;