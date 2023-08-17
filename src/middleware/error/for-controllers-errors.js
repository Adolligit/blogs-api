const httpStatus = require('http-status');

function forControllerErrors(error, _req, res, _next) {
  const { cause, problem } = error;

  if (problem) {
    const { status, message } = problem;

    return res.status(status).json({ message });
  }
  
  if (!cause) {
    return res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .json({ message: `Unexpected error: '${error.message}'` });
  }

  return res.status(cause.status).json({ message: error.message });
}

module.exports = forControllerErrors;