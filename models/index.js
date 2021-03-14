const mysql = require('mysql2/promise');

const DATABASE = 'db';

// Requires database password set in environment variable
const getDB = () => mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: process.env.DB_PASSWORD || '',
  multipleStatements: true,
}).then((db) =>
  db.query(`CREATE DATABASE IF NOT EXISTS ${DATABASE}; use ${DATABASE};`)
    .then(() => db)
);

module.exports = { getDB };
