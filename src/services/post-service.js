const { Op } = require('sequelize');

const { BlogPost: postModel, User, Category } = require('../database/models');

async function all() {
  const result = postModel.findAll({ 
      include: [
      { 
        model: User, 
        as: 'user', 
        attributes: { exclude: ['password'] },
      },
      { 
        model: Category, 
        as: 'categories',
        through: {
          attributes: [],
        },
      }],
    });

  return result;
}

async function query(search) {
  const BE_LIKE_SEARCH = { [Op.like]: `%${search}%` };

  const result = await postModel.findAll({ 
    where: {
      [Op.or]: [
        { title: BE_LIKE_SEARCH },
        { content: BE_LIKE_SEARCH },
      ],
    },
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });

  return result;
}

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
};