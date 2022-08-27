const Joi = require('joi');

async function inputValues(req, _res, next) {
  const schema = Joi.string().email();
  const options = { cause: { status: 400 } };
  const expectedKeys = ['email', 'password'];
  
  const itHas = expectedKeys.every((e) => Object.keys(req.body).includes(e));
  if (!itHas) throw new Error('Some required fields are missing', options);

  const { email, password } = req.body;
  const { error } = schema.validate(email);

  if (error || !email || !password) throw new Error('Invalid fields', options);

  next();
}

module.exports = { inputValues };