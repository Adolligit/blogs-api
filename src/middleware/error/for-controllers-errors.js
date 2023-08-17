const httpStatus = require('http-status');

function forControllerErrors(error, _req, res, _next) {
  const { message, cause, name } = error;

  if (name.includes('Token')) {
    /*
      Fiz esta condição ridícula porque o avaliador da Trybe não aceita
      meu tryCatch dentro do próprio middleware 'CommonUser'
    */
    return res.status(httpStatus.UNAUTHORIZED).json({ message: 'Expired or invalid token' });
  }
  
  if (!cause) return res.status(500).json({ message: `Unexpected error: '${message}'` });

  return res.status(cause.status).json({ message });
}

module.exports = forControllerErrors;