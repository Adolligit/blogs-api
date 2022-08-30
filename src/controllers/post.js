const postService = require('../services/post');

const all = async (_req, res) => res.status(200).json(await postService.all());
const query = (_req, _res) => postService.all();
const create = (_req, _res) => postService.all();
const byId = (_req, _res) => postService.all();
const update = (_req, _res) => postService.all();
const remove = (_req, _res) => postService.all();

module.exports = {
  all,
  query,
  create,
  byId,
  update,
  remove,
};