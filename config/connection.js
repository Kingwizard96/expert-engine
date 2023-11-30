const { connect } = require('mongoose');

// Replace the uri string with your MongoDB deployment's connection string.
const connectionString ='mongodb://localhost:27017/your_db_name';

connect(connectionString);

module.exports = connection;