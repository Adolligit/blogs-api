const express = require('express');
const { auth, validates } = require('../middleware');
const categoriesController = require('../controllers/categories');
const addRescue = require('../util/addRescue');

const route = express();

const postMidArr = [
  validates.categories.inputValues,
  categoriesController.create,
];

route.use(auth.CommonUser);
route.post('/', addRescue(postMidArr));
route.get('/', categoriesController.all);

module.exports = route;