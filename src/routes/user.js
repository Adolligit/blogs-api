const express = require('express');

const authenticationJWT = require('../middleware/authenticationJWT');

const route = express();

route.post('/', (req, res) => res.status(201).json({ message: 'usuário criado' }));

route.use(authenticationJWT);

module.exports = route;