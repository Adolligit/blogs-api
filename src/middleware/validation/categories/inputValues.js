const Joi = require('joi');

const options = { cause: { status: 400 } };

const schema = Joi.object({ name: Joi.string().required() });

async function inputValues(req, _res, next) {
  const { error } = schema.validate(req.body);
  
  if (error) throw new Error(error.message, options);

  next();
}

module.exports = { inputValues };