const mongoose = require('mongoose');
const winston = require('winston');
const config = require('config');
function init() {
    mongoose.connect(config.get('db'))
        .then(() => winston.info('Connected to MongoDB..'))
}
module.exports.init = init;