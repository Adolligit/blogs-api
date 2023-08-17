const Joi = require('joi');

const user = Joi.object({
    displayName: Joi.string().min(8).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    image: Joi.string(),
});

const login = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
});

const category = Joi.object({
    name: Joi.string().min(2).required(),
});

module.exports = { user, login, category };