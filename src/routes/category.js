const express = require('express');
const { auth, validates } = require('../middleware');
const categoryController = require('../controllers/category');
const addRescue = require('../util/addRescue');

const route = express();

const postMidArr = [
  validates.categories.inputValues,
  categoryController.create,
];

route.use(auth.CommonUser);
route.post('/', addRescue(postMidArr));
route.get('/', categoryController.all);

module.exports = route;