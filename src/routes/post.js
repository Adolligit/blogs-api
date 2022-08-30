const express = require('express');
const postController = require('../controllers/post');

const route = express();

route.get('/', postController.all);
route.get('/search?', postController.query);
route.post('/', postController.create);
route.post('/:id', postController.byId);
route.put('/:id', postController.update);
route.delete('/:id', postController.remove);

module.exports = route;