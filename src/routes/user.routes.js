const express = require('express');
const userController = require('../controllers/user.controller');
const authMiddleware = require('../middlewares/authMiddleware');

const routers = express.Router();

routers.post('/', userController.create);
routers.get('/', authMiddleware, userController.getAllUsers);
routers.delete('/me', authMiddleware, userController.deleteMyUser);
routers.get('/:id', authMiddleware, userController.getUserById);

module.exports = routers;