require('dotenv').config();
const jwt = require('jsonwebtoken');

const { User } = require('../database/models');

async function entry(payload) {
  const { email } = payload;

  const existingUser = await User.findOne({ where: { email } });

  if (!existingUser) throw new Error('Invalid fields', { cause: { status: 400 } });

  const jwtconfig = {
    expiresIn: '1d',
    algorithm: 'HS256',
  };

  return jwt.sign({ email }, process.env.JWT_SECRET, jwtconfig);
}

module.exports = { entry };