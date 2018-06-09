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
    //seems to me like logging GET and OPTIONS into a database is a bad idea, although I might be mistaken..
    if (!req.method == 'GET' || !req.method == 'OPTIONS') {
        dblogger.info('Log of all API calls', [{ path: req.path }, { method: req.method }, { remote_address: req.ip }])
    }
    next();
}

module.exports.mongoDBLogger = dblogger;