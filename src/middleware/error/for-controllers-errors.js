const httpStatus = require('http-status');

module.exports = ({ problem }, _req, res, _next) => (
  problem 
    ? res.status(problem.status).json({ message: problem.message })
    : res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: 'Unexpected error' })
);