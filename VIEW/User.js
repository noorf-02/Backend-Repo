const express = require('express');
const { createUser, getUser } = require('../CONTROLLER/User');
const Router = express.Router();

Router.post('/register', createUser);
Router.get('/users', getUser);

module.exports = Router;