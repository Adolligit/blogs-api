const { User: userModel } = require('../database/models');
const createToken = require('../util/create-token');
const { USER_NOT_FOUND } = require('../util/delegate-responsibility');

const EXC_PASSWORD = { attributes: { exclude: ['password'] } };

async function create(payload) {
  const existingUser = await userModel.findOne({ where: { email: payload.email } });
  
  if (existingUser) throw new Error('User already registered', { cause: { status: 409 } });

  const { id, displayName, email } = await userModel.create(payload);

  return createToken({ id, displayName, email }, '1d');
}

const all = () => userModel.findAll(EXC_PASSWORD);

async function byId(id) {
  const userSearch = await userModel.findByPk(id, EXC_PASSWORD);

  if (!userSearch) {
    const error = new Error();
    error.problem = USER_NOT_FOUND;

    throw error;
  }
  return userSearch;
}

module.exports = {
  create,
  all,
  byId,
};