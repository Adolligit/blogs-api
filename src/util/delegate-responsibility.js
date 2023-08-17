const httpStatus = require('http-status');

module.exports = {
    CATEGORY_ALREADY_EXISTS: {
        message: 'Category already exists',
        status: httpStatus.CONFLICT,
    },
    INVALID_TOKE: {
        message: 'Expired or invalid token',
        status: httpStatus.UNAUTHORIZED,
    },
    USER_NOT_FOUND: {
        message: 'User not found',
        status: httpStatus.NOT_FOUND,
    },
};
