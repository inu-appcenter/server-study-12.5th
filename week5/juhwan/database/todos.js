const todoRouter = require("../routes/todos.router");
const mysql = require("mysql2/promise");
const { getConn } = require("./pool");

const createTodo = async (content) => {
  let conn;
  let result;
  try {
    conn = await getConn();
    await conn.beginTransaction();
    const sql = "insert into todo(content) values(?)";
    const realSql = mysql.format(sql, [content]);
    await conn.query(realSql);
    await conn.commit();
    result = "저장 성공";
  } catch (error) {
    if (conn) conn.rollback();
    result = error;
  } finally {
    if (conn) conn.release();
    return result;
  }
};

const getTodos = async (flag = true) => {
  let conn;
  let result;
  try {
    conn = await getConn();
    let sql;
    let realSql;
    if (flag) {
      sql = "select * from todo";
      const [rows] = await conn.query(sql);
      result = rows;
    } else {
      sql = "select * from todo where completed = ?";
      realSql = mysql.format(sql, ["true"]);
      const [rows] = await conn.query(realSql);
      result = rows;
    }
  } catch (error) {
    console.log(error);
    result = error;
  } finally {
    if (conn) conn.release();
    return result;
  }
};

const updateTodo = async (id, content) => {
  let conn;
  let result;
  try {
    conn = await getConn();
    await conn.beginTransaction();
    let sql = "update todo set content = ? where id = ?";
    let realSql = mysql.format(sql, [content, id]);
    const [value] = await conn.query(realSql);
    if (value.affectedRows === 0) {
      throw new Error("존재하지 않는 ID입니다.");
    }
    await conn.commit();
    result = "수정 성공";
  } catch (error) {
    console.error(error.message);
    if (conn) conn.rollback();
    result = error;
  } finally {
    if (conn) conn.release();
    return result;
  }
};

const deleteTodo = async (id) => {
  let conn;
  let result;
  try {
    conn = await getConn();
    await conn.beginTransaction();
    let sql = "delete from todo where id = ?";
    let realSql = mysql.format(sql, [id]);
    const [value] = await conn.query(realSql);
    if (value.affectedRows === 0) {
      throw new Error("존재하지 않는 ID입니다.");
    }
    await conn.commit();
    result = "삭제 성공";
  } catch (error) {
    console.error(error.message);
    if (conn) conn.rollback();
    result = error;
  } finally {
    if (conn) conn.release();
    return result;
  }
};

const toggleTodo = async (id) => {
  let conn;
  let result;
  try {
    conn = await getConn();
    await conn.beginTransaction();
    let sql = "update todo set completed = ? where id = ?";
    let realSql = mysql.format(sql, ["true", id]);
    const [value] = await conn.query(realSql);
    if (value.affectedRows === 0) {
      throw new Error("존재하지 않는 ID입니다.");
    }
    await conn.commit();
  } catch (error) {
    console.error(error.message);
    if (conn) conn.rollback();
    result = error;
  } finally {
    if (conn) conn.release();
    return result;
  }
};

module.exports = {
  createTodo,
  getTodos,
  updateTodo,
  deleteTodo,
  toggleTodo,
};
