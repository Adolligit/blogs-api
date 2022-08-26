const express = require('express');
const authenticationJWT = require('./middleware/authenticationJWT');
const routes = require('./routes');

const app = express();

app.use(express.json());

app.use('/login', routes.login);
app.use('/user', routes.user);

app.use(authenticationJWT);
app.use('/categories', routes.categories);
app.use('/post', routes.post);

module.exports = app;
