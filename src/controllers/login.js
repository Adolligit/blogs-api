const service = require('../services/login');

async function entry(req, res) {
  const { email, password } = req.body;

  const token = await service.entry({ email, password });

  res.status(200).json({ token });
}

module.exports = { entry };