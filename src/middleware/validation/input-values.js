const httpStatus = require('http-status');

const inputValues = (schema) => (req, _res, next) => {
    const { error } = schema.validate(req.body);

    if (error) {
        error.problem = { message: error.message, status: httpStatus.BAD_REQUEST };

        throw error;
    }

    next();
};

module.exports = inputValues;