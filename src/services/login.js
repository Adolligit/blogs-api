const { User } = require('../database/models');
const createToken = require('../util/createToken');

async function entry(payload) {
  const { email } = payload;

  const existingUser = await User.findOne({ where: { email } });

  if (!existingUser) throw new Error('Invalid fields', { cause: { status: 400 } });

  const { id, displayName } = existingUser;

  return createToken({ id, displayName, email }, '1d');
}

module.exports = { entry };