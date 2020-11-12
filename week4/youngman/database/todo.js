const todos = [];
let fisrtNum = 0;
//let은 변수에 재할당 가능 const는 불가능!!!!!!!!!
function numberIncrease() {
  fisrtNum++;
}
const createTodos = (content) => {
  const content2 = {
    id: fisrtNum,
    content: content,
    isCompleted: false,
    date: new Date().toLocaleString(),
  };
  todos.push(content2);
  numberIncrease();
};
const getTodos = (flag = true) => {
  if (flag) return todos;
  else return todos.filter((e) => e.isCompleted == true);
};

const deleteTodos = (id) => {
  const i = todos.findIndex((e) => e.id == id);
  //filter를 쓸수없는이유는 splice함수를 사용하기위해선 Array의 위치값이 필요한데
  //filter로 값을 골라내면 0번부터시작되는 인덱스 값대신 1부터 시작되는 id값이 얻어져 한칸씩 뒤로 밀린다
  todos.splice(i, 1);
  //splice함수 -추가할때(Array위치,0(추가할때 0인거같음),"value")
  //           -삭제할때(Array위치,1(삭제할때 1고정인거같음),"value"(없어도됨))
};

const updateTods = (id, content) => {
  // const y=todos.findIndex((e)=>e.id==id);
  // todos.splice(y,1,{id,content,data:"222"})
  const y = todos.find((e) => e.id == id);
  //y값에 todos에있는 id값중 조건에 부합하는 첫번째 값을 '배열'로 주었습니다
  y.content = content;
  //위에서 y값을 배열로 주었기 때문에 id말고 todos에있는 content등이
  //Null값으로 들어온거같고 Null로 들어온 content값을 todos에있던 content값으로 교체해서 이 코드도 동작이 되는거같습니다
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
  updateTods,
  createTodos,
  toggleTodo,
  todos,
};
