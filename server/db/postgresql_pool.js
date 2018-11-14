require('dotenv').config();
const { Pool } = require('pg')

const pool = new Pool({
  max: 10,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
  // host: process.env.DB_HOST,
  // user: process.env.DB_USER,
  // password: process.env.DB_PASSWORD,
  // database: process.env.DB_NAME
  // port: process.env.DB_PORT

  //Or you can use a connectiong string
  connectionString: 'postgres://shkaxycj:j-R9iGKvJkEkYf8uyPXSpKXuVrjarmqh@pellefant.db.elephantsql.com:5432/shkaxycj' 
})

const getConnection = function(callback) {
  pool.connect(function(err, con, release) {
    if (err) return callback(err);
    callback(err, con, release);
  });
};

module.exports = getConnection;
