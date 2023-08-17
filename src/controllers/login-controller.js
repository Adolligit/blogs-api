const httpStatus = require('http-status');
const service = require('../services/login-service');

async function entry(req, res) {
  const { email, password } = req.body;

  const token = await service.entry({ email, password });

  res.status(httpStatus.OK).json({ token });
}

module.exports = { entry };