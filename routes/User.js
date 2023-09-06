const express = require('express');
const userControls = require('../controllers/User')
const Router = express.Router();

Router.post('/signup', userControls.signup)
Router.post('/login', userControls.login)
Router.put('/update/:id', userControls.update)
Router.delete('/delete/:id', userControls.delete)

module.exports = Router;