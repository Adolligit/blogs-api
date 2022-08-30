const categoryService = require('../services/category');

async function create(req, res) {
  const { name: nameBody } = req.body;

  const { id, name } = await categoryService.create({ name: nameBody });

  return res.status(201).json({ id, name });
}

const all = async (_req, res) => res.status(200).json(await categoryService.all());

module.exports = { create, all };