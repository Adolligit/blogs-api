require('dotenv').config();
const httpStatus = require('http-status');
const jwt = require('jsonwebtoken');

function authenticationJWT(req, res, next) {
  const { authorization } = req.headers;

  console.log(authorization);

  if (!authorization) {
    return res.status(httpStatus.UNAUTHORIZED).json({ message: 'Token not found' });
  }

  const token = (
    authorization.includes('Bearer')
      ? authorization.replace('Bearer', '').trim()
      : authorization
  );

  const decode = jwt.verify(token, process.env.JWT_SECRET);

  res.locals.authenticated = decode;

  next();
}

module.exports = authenticationJWT;