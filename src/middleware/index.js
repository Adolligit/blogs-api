const { inputValues } = require('./validation/login/inputValues');
const CommonUser = require('./authentication/CommonUser');
const handlerFromController = require('./error/controller');

module.exports = {
  auth: { CommonUser },
  validates: {
    login: { inputValues },
    user: {},
    categories: {},
    post: {},
  },
  errorHandler: { 
    controller: handlerFromController,
  },
};