const express = require('express');

const loginController = require('../controllers/login.controller');

const routers = express.Router();

routers.post('/', loginController.authenticate);

module.exports = routers;