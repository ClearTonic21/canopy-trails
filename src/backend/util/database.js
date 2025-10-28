const mySQL = require('mysql2');

const config = require('../config/config.json');

const pool = mySQL.createPool({
  host: config.host,
  user: config.user,
  database: config.database,
  password: config.password,
})

module.exports = pool.promise();