const httpStatus = require('http-status');
const categoryService = require('../services/category');

async function create(req, res) {
  const { name: nameBody } = req.body;

  const { id, name } = await categoryService.create({ name: nameBody });

  return res.status(httpStatus.CREATED).json({ id, name });
}

const all = async (_req, res) => res.status(httpStatus.OK).json(await categoryService.all());

module.exports = { create, all };