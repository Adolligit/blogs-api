const httpStatus = require('http-status');
const postService = require('../services/post-service');

const all = async (_req, res) => res.status(httpStatus.OK).json(await postService.all());

async function query(req, res) {
  const { q } = req.query;

  const result = await postService.query(q);

  res.status(httpStatus.OK).json(result || []);
}

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