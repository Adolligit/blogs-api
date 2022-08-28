const { User: userModel } = require('../database/models');
const createToken = require('../util/createToken');

async function create(payload) {
  const existingUser = await userModel.findOne({ where: { email: payload.email } });
  
  if (existingUser) throw new Error('User already registered', { cause: { status: 409 } });

  const { id, displayName, email } = await userModel.create(payload);

  return createToken({ id, displayName, email }, '1d');
}

const all = () => userModel.findAll({ attributes: { exclude: ['password'] } });

module.exports = {
  create,
  all,
};