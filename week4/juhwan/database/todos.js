const todoRouter = require("../routes/todos.router");

// Auto INCREMENT
const todos = [];
let lastId = 0;

const createTodo = (content) => {
  const todo = {
    id: lastId,
    content: content,
    isCompleted: false,
    date: new Date().toLocaleString(),
  };
  todos.push(todo);
  lastId++;
  console.log(lastId);
};

const getTodos = (flag = true) => {
  if (flag) return todos;
  else return todos.filter((e) => e.isCompleted == true);
};

const updateTodo = (id, content, res) => {
  const todo = todos.find((e) => e.id == id);
  todo.content = content;

  // find 메서드는 callbock 함수가 참을 반환 할 때까지 해당 배열의 각 요소에 대해서 callback을 수행하는데 찾았으면 바로 반환합니다.
  // todos에서 파라미터의 id와 같은 id인 객체를 찾아서 반환하여 todo가 참조하고  todo에 속성인 content에 접근해서 값을 바꾼다고 생각합니다...
};

const deleteTodo = (id, res) => {
  const i = todos.findIndex((e) => {
    e.id == id;
  });
  todos.splice(i, 1);
};

const toggleTodo = (id, res) => {
  const todo = todos.find((e) => e.id == id);
  if (todo.isCompleted) {
    todo.isCompleted = false;
  } else {
    todo.isCompleted = true;
  }
};

module.exports = {
  createTodo,
  getTodos,
  updateTodo,
  deleteTodo,
  toggleTodo,
};
