const express = require('express');
const SwaggerUI = require('swagger-ui-express');
const convertYaml = require('./helpers/convert-yaml-file');
const { errorHandler } = require('./middleware');
const routes = require('./routes');

const app = express();

app.use(
    '/docs',
    SwaggerUI.serve,
    SwaggerUI.setup(convertYaml('./public/v1/swagger.yml')),
);

app.use('/login', routes.login);
app.use('/user', routes.user);
app.use('/categories', routes.categories);
app.use('/post', routes.post);
app.use(errorHandler.controller);

module.exports = app;
