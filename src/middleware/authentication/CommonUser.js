require('dotenv').config();
const jwt = require('jsonwebtoken');

const authenticationJWT = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) return res.status(401).json({ message: 'Token not found' });

  try {
    jwt.verify(authorization, process.env.JWT_SECRET);
    console.log('Try');
  } catch (error) {
    console.log('Catch');
    return res.status(401).json({ message: 'Expired or invalid token' });
  }

  next();
};

module.exports = authenticationJWT;