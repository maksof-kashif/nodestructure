const express = require('express');
const app = express();

var userRoutes = require('./user_route');

app.use('/user', userRoutes);

module.exports = app;