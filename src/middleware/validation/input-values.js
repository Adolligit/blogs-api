const httpStatus = require('http-status');

const inputValues = (schema) => (req, _res, next) => {
    const options = { cause: { status: httpStatus.BAD_REQUEST } };

    const { error } = schema.validate(req.body);

    if (error) throw new Error(error.message, options);

    next();
};

module.exports = { inputValues };