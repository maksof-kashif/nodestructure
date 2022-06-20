const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();
var routes = require('./routes/mainRoute');
require('./config');

app.use(cors())
app.use(bodyParser.json({ limit: '2mb' }))
app.use(bodyParser.urlencoded({ limit: '2mb', extended: true }))

app.use(process.env.MIDDLEWARE, routes);

app.listen(process.env.PORT, function () {
    console.log('Server is running on http://' + process.env.HOST + ':' + process.env.PORT);
})