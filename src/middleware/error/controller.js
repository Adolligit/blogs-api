module.exports = (error, _req, res, _next) => {
  const { message, cause } = error;

  return res.status(cause.status || 500).json({ message });
};