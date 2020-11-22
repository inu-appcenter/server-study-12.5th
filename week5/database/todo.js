const { getConn } = require("../database/pool");
const todos = [];
let fisrtNum = 0;
//let은 변수에 재할당 가능 const는 불가능!!!!!!!!!
function numberIncrease() {
  fisrtNum++;
}
const createTodos = async (content) => {
  let conn;
  let result;
  try {
    conn = await getConn();
    const sql = "INSERT INTO todo (content) VALUES(?)";
    const [rows] = await conn.query(sql, content);
    result = rows;
  } catch (error) {
    console.error(error);
    result = error;
  } finally {
    if (conn) conn.release(); //DB연결을 계속 하고있기때문에
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
    // } else return result.filter((e) => e.isCompleted == true);
  }
  /*
   * 이 블록에는 try 블록에서 일어난 일에 관계없이 무조건 실행될 코드가 위치한다.
   * 이 코드는 try 블록이 어떻게든 종료되면 실행된다. * try 블록이 종료되는 상황은 다음과 같다.
   * 1) 정상적으로 블록의 끝에 도달했을 때
   * 2) break, continue 또는 return 문에 의해서
   * 3) 예외가 발생했지만 catch 절에서 처리했을 때
   * 4) 예외가 발생했고 그것이 잡히지 않은 채 퍼져나갈 때
   */
};

const deleteTodos = async (id) => {
  let conn;
  let result;
  try {
    conn = await getConn();
    const sql = "DELETE FROM todo WHERE id=?";
    const [rows] = await conn.query(sql, id);
    result = rows;
  } catch (error) {
    console.error(error);
    result = error;
  } finally {
    if (conn) conn.release(); //DB연결을 계속 하고있기때문에
    return result;
  }
};

const updateTodos = async (content, id) => {
  let conn;
  let result;
  try {
    conn = await getConn();
    const sql = "UPDATE todo SET content=?";
    const sql2 = "WHERE id=?";
    const [rows] = await conn.query(sql, content, sql2, id);
    result = rows;
  } catch (error) {
    console.log(error);
    result = error;
  } finally {
    if (conn) conn.release();
    return result;
  }
};

//아이디를 통해 iscompleted값이 false면 true로 true면 false로 만들어 주는함수
const toggleTodo = (id) => {
  const z = todos.find((e) => e.id == id);
  if (z.isCompleted) {
    z.isCompleted = false;
  } else {
    z.isCompleted = true;
  }
};

module.exports = {
  getTodos,
  deleteTodos,
  updateTodos,
  createTodos,
  toggleTodo,
  todos,
};
