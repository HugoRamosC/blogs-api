const express = require('express');

const authController = require('../controllers/auth.controller');

const routers = express.Router();

routers.post('/', authController.authenticate);

module.exports = routers;