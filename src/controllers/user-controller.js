const httpStatus = require('http-status');
const userService = require('../services/user-service');

async function create(req, res) {
  const { displayName, email, password, image } = req.body;

  const token = await userService.create({ displayName, email, password, image });

  res.status(httpStatus.CREATED).json({ token });
}

async function byId(req, res) {
  const { id } = req.params;

  const result = await userService.byId(id);

  return res.status(httpStatus.OK).json(result);
}

const all = async (_req, res) => res.status(httpStatus.OK).json(await userService.all());

module.exports = {
  create,
  byId,
  all,
};