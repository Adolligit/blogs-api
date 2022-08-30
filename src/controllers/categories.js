const categoriesService = require('../services/categories');

async function create(req, res) {
  const { name: nameBody } = req.body;

  const { id, name } = await categoriesService.create({ name: nameBody });

  return res.status(201).json({ id, name });
}

const all = async (_req, res) => res.status(200).json(await categoriesService.all());

module.exports = { create, all };