const CommonUser = require('./authentication/common-user');
const inputValues = require('./validation/input-values');
const controller = require('./error/for-controllers-errors');

module.exports = {
  auth: { CommonUser },
  inputValues,
  errorHandler: { 
    controller,
    service: '',
    model: '',
  },
};