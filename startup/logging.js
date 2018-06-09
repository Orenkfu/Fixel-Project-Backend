const winston = require('winston');
require('winston-mongodb');
require('express-async-errors');

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
    //not working
    //winston.add(winston.transports.mongoDB, { db: 'mongodb://localhost/fixel-demo' }
    //, { collection: 'logs' },
    //    { storeHost: true }
    //);
}