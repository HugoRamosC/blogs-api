const express = require('express');

const postController = require('../controllers/post.controller');
const authMiddleware = require('../middlewares/authMiddleware');

const routers = express.Router();

routers.post('/', authMiddleware, postController.createPost);
routers.get('/', authMiddleware, postController.getAllPosts);
routers.get('/:id', authMiddleware, postController.getPostById);
routers.put('/:id', authMiddleware, postController.updatePost);
routers.delete('/:id', authMiddleware, postController.deletePost);

module.exports = routers;