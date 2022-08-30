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
  // Só isso para usar OR? EZE!
  const result = await postModel.findOne({ 
    where: {
      [Op.or]: [
        {
          title: {
            [Op.like]: `%${search}`,
          },
        },
        {
          content: {
            [Op.like]: `%${search}`,
          },
        },
      ],
    },
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