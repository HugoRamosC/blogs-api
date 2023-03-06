const express = require('express');
const userController = require('../controllers/user.controller');
const authMiddleware = require('../middlewares/authMiddleware');

const routers = express.Router();

routers.post('/', userController.create);
// routers.get('/', authMiddleware, userController.getByEmail);
routers.get('/', authMiddleware, userController.getAllUsers);

module.exports = routers;