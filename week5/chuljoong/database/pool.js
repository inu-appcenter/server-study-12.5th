const mysql = require("mysql2/promise");
require("dotenv").config();

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: "test",
  waitForConnections: true,
  connectionLimit: 5,
});

module.exports = {
  getConn: () => pool.getConnection(), // Promise<PoolConnection> 타입을 리턴하는 getConn 함수
};
