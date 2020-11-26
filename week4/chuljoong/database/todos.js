const { getConn } = require("./pool");

const createTodo = async (content) => {
  let conn;
  let result;
  try {
    conn = await getConn();
    const [rows] = await conn.query("insert into todo(content) values(?)", content); // conn.query(sql, [params], cb)
    result = rows;
  } catch (error) {
    console.error(error);
    result = error;
  } finally {
    if (conn) conn.release(); // 데이터베이스 서버열고 넣고 닫아줘야함
    return result;
  }
};

const getTodos = async (flag = true) => {
  let conn;
  let result;
  try {
    conn = await getConn();
    const [rows] = await conn.query("select * from todo");
    result = rows;
  } catch (error) {
    console.error(error);
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
    const [rows] = await conn.query("update todo set content=? WHERE id=?;", [content, id]);
    result = rows;
  } catch (error) {
    console.error(error);
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
    const [rows] = await conn.query("delete from todo where id=?", id);
    result = rows;
  } catch (error) {
    console.error(error);
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
    const [rows] = await conn.query("update todo set if(isdone=0, 1, 0) where=?", id);
    result = rows;
  } catch (error) {
    console.error(error);
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
