const { Category: categoryModel } = require('../database/models');

async function getCategory(conditions) {
  const result = await categoryModel.findOne({ where: conditions });

  return result;
}

async function create(payload) {
  const conditions = { name: payload.name };

  const existingCategory = await getCategory(conditions);

  if (existingCategory) throw new Error('Category already exists', { cause: { status: 409 } });

  return categoryModel.create(payload);
}

const all = () => categoryModel.findAll({ order: ['id'] });

module.exports = { create, all };