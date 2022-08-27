require('dotenv').config();
const jwt = require('jsonwebtoken');

async function entry(payload) {
  const { email } = payload;

  const jwtconfig = {
    expiresIn: '1d',
    algorithm: 'HS256',
  };

  return jwt.sign({ email }, process.env.JWT_SECRET, jwtconfig);
}

module.exports = { entry };