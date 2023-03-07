const express = require('express');

const postController = require('../controllers/post.controller');

const routers = express.Router();

routers.post('/', postController.createPost);

module.exports = routers;