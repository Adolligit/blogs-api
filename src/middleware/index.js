const CommonUser = require('./authentication/CommonUser');

const login = require('./validation/login/inputValues');
const user = require('./validation/user/inputValues');

const handlerFromController = require('./error/controller');

module.exports = {
  auth: { CommonUser },
  validates: {
    login,
    user,
    categories: {},
    post: {},
  },
  errorHandler: { 
    controller: handlerFromController,
  },
};