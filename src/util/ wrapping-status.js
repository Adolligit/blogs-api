const httpStatus = require('http-status');

module.exports = {
    CATEGORY_ALREADY_EXISTS: {
        message: 'Category already exists',
        status: httpStatus.CONFLICT,
    },
    USER_NOT_FOUND: {
        message: 'User not found',
        status: httpStatus.NOT_FOUND,
    },
    USER_ALREADY_REGISTERED: {
        message: 'User already registered',
        status: httpStatus.CONFLICT,
    },
};
