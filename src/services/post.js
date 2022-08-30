const { BlogPost: postModel, User, Category } = require('../database/models');

async function all() {
  const result = postModel.findAll({ 
      include: [
      { 
        model: User, 
        as: 'users', 
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
const query = () => postModel.findAll();
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