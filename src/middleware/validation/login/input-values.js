const httpStatus = require('http-status');
const Joi = require('joi');

async function inputValues(req, _res, next) {
  const options = { cause: { status: httpStatus.BAD_REQUEST } };
  const schema = Joi.string().email();

  const { email, password } = req.body;
  const { error } = schema.validate(email);

  if (error || !email || !password) throw new Error('Some required fields are missing', options);

  next();
}

module.exports = { inputValues };