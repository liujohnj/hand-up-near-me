const config = require('./config.js');
const mongoose = require('mongoose');

const URI = config.databaseURI;

mongoose.connect(URI, {useUnifiedTopology: true, useNewUrlParser: true} );
exports.db = mongoose.connection;

