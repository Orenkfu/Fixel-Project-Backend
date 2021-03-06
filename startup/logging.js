const winston = require('winston');
require('winston-mongodb');
require('express-async-errors');
const config = require('config');
const mongoMorgan = require('mongo-morgan');

module.exports = function () {
    winston.handleExceptions(
        new winston.transports.Console({ colorize: true, prettyPrint: true }),
        new winston.transports.File({ filename: 'uncaughtExceptions.log' })
    );

    process.on('unhandledRejection', (ex) => {
        winston.log(ex)
        throw ex;
    })
    winston.add(winston.transports.File, { filename: 'logfile.log' })

}