const express = require('express');

const client = require('./api_client/tmdbclient');
const winston = require('winston');
const app = express();
const db = require('./startup/db_connect.js').init();
require('./startup/logging')();
require('./startup/routes')(app);
require('./startup/config')();
require('./startup/validation')();
require('./startup/prod')(app);
//client.populateMovies()
app.use(express.static('public'))

//PORT
const port = process.env.PORT || 3000;
app.listen(port, () => winston.info(`SERVER INITIATED: Listening on port ${port}`))



