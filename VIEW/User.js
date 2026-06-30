const express = require('express');
const { createUser } = require('../CONTROLLER/User');
const Router = express.Router();

Router.post('/register', createUser);

module.exports = Router;