var express = require('express');
var Route = express.Router();
var userController = require('../controllers/user_controller');

var router = function() {
    Route.post('/signup', userController.signup);
    return Route
}

module.exports = router();