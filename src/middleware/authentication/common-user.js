require('dotenv').config();
const httpStatus = require('http-status');
const jwt = require('jsonwebtoken');

function authenticationJWT(req, res, next) {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(httpStatus.UNAUTHORIZED).json({ message: 'Token not found' });
  }

  const token = (
    authorization.includes('Bearer')
      ? authorization.replace('Bearer', '').trim()
      : authorization
  );

  try {
    jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    return res.status(httpStatus.UNAUTHORIZED).json({ message: 'Expired or invalid token' });
  }

  next();
}

module.exports = authenticationJWT;