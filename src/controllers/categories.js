const categoriesService = require('../services/categories');

async function create(req, res) {
  const { name: nameBody } = req.body;
  
  const { id, name } = await categoriesService.create({ name: nameBody });

  return res.status(201).json({ id, name });
}

module.exports = { create };