const { getTodos, deleteTodos, updateTods } = require("../database/todo");
const { validator, validator2, validator3 } = require("../Validator/validator");

const todoRouter = require("express").Router();

//모두 조회
todoRouter.get("/", validator3, (req, res, next) => {
  const todos = getTodos();
  res.status(200).json({ success: true, todos: todos });
});
//validator를통해 아무것도 없을시 다시입력

//삭제 경로에서 :id 값을 파라미터로 받아야 실행됨
todoRouter.delete("/:id", validator, (req, res, next) => {
  const { id } = req.params;
  deleteTodos(id);
  res.status(200).json({ success: true, message: "삭제 되었습니다" });
});
//validator를통해 id값이 정수형이 아닐시 다시입력

//새로운 값추가
todoRouter.put("/:id", validator2, (req, res, next) => {
  const { id } = req.params;
  const { content } = req.body;
  updateTods(id, content);
  res.status(200).json({ success: true, message: "업데이트 되었습니다" });
});
//validator를통해 content값이 없을시 다시입력

//마감한 것만 조회
todoRouter.get("/complete", validator3, (req, res, next) => {
  const todos = getTodos(false);
  res.status(200).json({ success: true, todos: todos });
});
//validator를통해 아무것도 없을시 다시입력

module.exports = todoRouter;
