const { User } = require('../database/models');
const createToken = require('../util/createToken');

async function create(payload) {
  const existingUser = await User.findOne({ where: { email: payload.email } });
  
  if (existingUser) throw new Error('User already registered', { cause: { status: 409 } });

  const { id, displayName, email } = await User.create(payload);

  return createToken({ id, displayName, email }, '1d');
}

module.exports = { create };