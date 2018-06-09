const movies = require('../controllers/movies-controller');
const users = require('../controllers/auth-controller');
const orders = require('../controllers/orders-controller');
const express = require('express');
const error = require('../middleware/error');
const logger = require('../middleware/logger');
const cors = require('../middleware/cors');

module.exports = function (app) {
    app.use(logger.log)
    app.use(express.json());
    app.use(cors);
    app.use('/api/auth', users);
    app.use('/api/movies', movies);
    app.use('/api/orders', orders);
    app.use(error);
}