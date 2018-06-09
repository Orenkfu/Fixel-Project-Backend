const winston = require('winston');
require('winston-mongodb');

const dblogger = new (winston.Logger)({
    level: "info",
    transports: [
        new winston.transports.MongoDB({
            db: 'mongodb://localhost:27017/fixel-demo',
            collection: 'logs',
            storeHost: true
        })
    ]
})
module.exports.log = function (req, res, next) {
    dblogger.info('Logger of all REST calls', [{ path: req.path }, { method: req.method }])
    next();
}

module.exports.mongoDBLogger = dblogger;