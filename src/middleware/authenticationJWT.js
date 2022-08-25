const authenticatioNJWT = (req, res, next) => {
  console.log('autenticado!');

  next();
};

module.exports = authenticatioNJWT;