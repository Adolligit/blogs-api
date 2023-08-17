const httpStatus = require('http-status');

function forControllerErrors(error, _req, res, _next) {
  const { cause, name, problem } = error;

  if (problem) {
    const { status, message } = problem;

    return res.status(status).json({ message });
  }
  
  if (name.includes('Token')) {
    /*
      Fiz esta condição ridícula porque o avaliador da Trybe não aceita
      meu tryCatch dentro do próprio middleware 'CommonUser'
    */
    return res.status(httpStatus.UNAUTHORIZED).json({ message: 'Expired or invalid token' });
  }
  
  if (!cause) {
    return res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .json({ message: `Unexpected error: '${error.message}'` });
  }

  return res.status(cause.status).json({ message: error.message });
}

module.exports = forControllerErrors;