const httpStatus = require('http-status');
const Joi = require('joi');

const options = { cause: { status: httpStatus.BAD_REQUEST } };

const schema = Joi.object({
  displayName: Joi.string().min(8).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  image: Joi.string(),
});

async function inputValues(req, _res, next) {
  const { error } = schema.validate(req.body);
  
  if (error) throw new Error(error.message, options);

  next();
}

module.exports = { inputValues };