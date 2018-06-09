const mongoose = require('mongoose');
const winston = require('winston');
function init() {
    mongoose.connect('mongodb://localhost/fixel-demo')
        .then(() => winston.info('Connected to MongoDB..'))
}
module.exports.init = init;