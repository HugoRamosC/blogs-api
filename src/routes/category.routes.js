const express = require('express');
const categoryController = require('../controllers/category.controller');
const authMiddleware = require('../middlewares/authMiddleware');

const routers = express.Router();

routers.post('/', authMiddleware, categoryController.createCategory);
// routers.get('/', authMiddleware, userController.getByEmail);
// routers.get('/', authMiddleware, categoryController.getAllCategories);
// routers.get('/:id', authMiddleware, categoryController.getUserById);

module.exports = routers;