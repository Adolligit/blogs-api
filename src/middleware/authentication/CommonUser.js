require('dotenv').config();
const jwt = require('jsonwebtoken');

function authenticationJWT(req, res, next) {
  const { authorization } = req.headers;

  if (!authorization) return res.status(401).json({ message: 'Token not found' });

  jwt.verify(authorization, process.env.JWT_SECRET);

  next();
}

module.exports = authenticationJWT;