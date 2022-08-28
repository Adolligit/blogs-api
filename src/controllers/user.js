const service = require('../services/user');

async function create(req, res) {
  const { displayName, email, password, image } = req.body;

  const token = await service.create({ displayName, email, password, image });

  res.status(201).json({ token });
}

async function byId(req, res) {
  console.log(req, res);
}

async function all(req, res) {
  console.log(req, res);
}

module.exports = {
  create,
  byId,
  all,
};