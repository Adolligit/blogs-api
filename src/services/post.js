const { Post: postModel } = require('../database/models');

const all = () => postModel.findAll();
const query = () => postModel.findAll();
const create = () => postModel.findAll();
const byId = () => postModel.findAll();
const update = () => postModel.findAll();
const remove = () => postModel.findAll();

module.exports = {
  all,
  query,
  create,
  byId,
  update,
  remove,
}