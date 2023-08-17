const { Category: categoryModel } = require('../database/models');
const { CATEGORY_ALREADY_EXISTS } = require('../util/ wrapping-status');

async function getCategory(conditions) {
  const result = await categoryModel.findOne({ where: conditions });

  return result;
}

async function create(payload) {
  const conditions = { name: payload.name };

  const existingCategory = await getCategory(conditions);
 
  if (existingCategory) {
    const error = new Error();
    error.problem = CATEGORY_ALREADY_EXISTS;

    throw error;
  }

  return categoryModel.create(payload);
}

const all = () => categoryModel.findAll({ order: ['id'] });

module.exports = { create, all };