const CommonUser = require('./authentication/CommonUser');

const login = require('./validation/login/inputValues');
const user = require('./validation/user/inputValues');

const forControllersErrors = require('./error/forControllersErrors');

module.exports = {
  auth: { CommonUser },
  validates: {
    login,
    user,
    categories: {},
    post: {},
  },
  errorHandler: { 
    controller: forControllersErrors,
    service: '',
    model: '',
  },
};