const winston = require('winston');
const { dbLogger } = require('./logger');


const { User, validate } = require('../models/user');

module.exports = function (err, req, res, next) {
    winston.error(err.message, err);

    message = err.message ? err.message : 'Something went wrong..';
    res.status(500).send(message);
};