const express = require('express');

const authenticationJWT = require('../middleware/authentication/CommonUser');

const route = express();

route.post('/', (req, res) => res.status(201).json({ message: 'usuário criado' }));

route.use(authenticationJWT);

module.exports = route;