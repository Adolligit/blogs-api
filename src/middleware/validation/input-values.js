const httpStatus = require('http-status');

const inputValues = (schema) => (req, _res, next) => {
    const { error: { message } } = schema.validate(req.body);

    if (message) {
        const error = new Error();
        error.problem = { message, status: httpStatus.BAD_REQUEST };

        throw error;
    }

    next();
};

module.exports = inputValues;