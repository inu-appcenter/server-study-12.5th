const mysql = require("mysql2/promise");
require("dotenv").config();

const pool = mysql.createPool({
  host: process.env.DB_HOST, // 127.0.0.1
  user: process.env.DB_USER, // root
  password: process.env.DB_PASSWORD,
  database: "test",
  waitForConnections: true,
  connectionLimit: 10,
});

module.exports = {
  getConn: () => pool.getConnection(),
};
