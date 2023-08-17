const { User } = require('../database/models');
const createToken = require('../util/create-token');
const { USER_NOT_FOUND } = require('../util/ wrapping-status');

async function entry(payload) {
  const { email, password } = payload;

  const existingUser = await User.findOne({ where: { email, password } });

  if (!existingUser) {
    const error = new Error();
    error.problem = USER_NOT_FOUND;

    throw error;
  }

  const { id, displayName } = existingUser;

  return createToken({ id, displayName, email }, '1d');
}

module.exports = { entry };