const CommonUser = require('./authentication/common-user');

const login = require('./validation/login/input-values');
const user = require('./validation/user/input-values');
const categories = require('./validation/categories/input-values');

const controller = require('./error/for-controllers-errors');

module.exports = {
  auth: { CommonUser },
  validates: {
    login,
    user,
    categories,
    post: {},
  },
  errorHandler: { 
    controller,
    service: '',
    model: '',
  },
};