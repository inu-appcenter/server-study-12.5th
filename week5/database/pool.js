const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "test",
  waitForConnections: true,
  connectionLimit: 10,
});

module.exports = {
  getConn: () => {
    return pool.getConnection();
  },
};
