const express = require('express');

const route = express();

route.post('/', (_req, res) => {
  res.status(200).json({ message: 'give me a job!' });
});

module.exports = route;