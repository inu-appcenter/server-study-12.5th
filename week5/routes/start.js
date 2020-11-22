const { createTodos, toggleTodo } = require("../database/todo");
const { validator, validator2 } = require("../Validator/validator");
const todoRouter2 = require("express").Router();

//생성
todoRouter2.post("", validator2, async (req, res, next) => {
  const { content } = req.body;
  await createTodos(content);
  res.status(200).json({ success: true, message: "업데이트 되었습니다" });
});
//validator를통해 content값이 없을시 다시입력

//새로운 정보만으로 기존 리소스 수정
todoRouter2.patch("/:id", validator, async (req, res, next) => {
  const { id } = req.params;
  toggleTodo(id);
  res.status(200).json({ success: true, message: "업데이트 되었습니다" });
}); //validator를통해 id값이 정수형이 아닐시 다시입력

module.exports = todoRouter2;
