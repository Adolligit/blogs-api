function forControllerErrors(error, _req, res, _next) {
  const { message, cause } = error;

  if (!cause) return res.status(500).json({ message: `Unexpected error: '${message}'` });

  return res.status(cause.status).json({ message });
}

module.exports = forControllerErrors;