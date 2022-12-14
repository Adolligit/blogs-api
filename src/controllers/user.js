const userService = require('../services/user');

async function create(req, res) {
  const { displayName, email, password, image } = req.body;

  const token = await userService.create({ displayName, email, password, image });

  res.status(201).json({ token });
}

async function byId(req, res) {
  const { id } = req.params;

  const result = await userService.byId(id);

  console.log('Executaki:', result);

  return res.status(200).json(result);
}

const all = async (_req, res) => res.status(200).json(await userService.all());

module.exports = {
  create,
  byId,
  all,
};