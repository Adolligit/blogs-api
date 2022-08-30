const { Category: categoriesModel } = require('../database/models');

async function getCategory(conditions) {
  const result = await categoriesModel.findOne({ where: conditions });

  return result;
}

async function create(payload) {
  const conditions = { name: payload.name };

  const existingCategory = await getCategory(conditions);

  if (existingCategory) throw new Error('Category already exists', { cause: { status: 409 } });

  return categoriesModel.create(payload);
}

const all = () => categoriesModel.findAll({ order: ['id'] });

module.exports = { create, all };