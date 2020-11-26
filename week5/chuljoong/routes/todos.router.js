const { getTodos, createTodo, updateTodo, deleteTodo, toggleTodo } = require("../database/todos");
const { idVaildator, contentVaildator } = require("../middleware/vaildator");

const router = require("express").Router();

router.get("/", (req, res, next) => {
  const todos = getTodos();
  res.status(200).json({ success: true, todos: todos });
});

/**
 * @description 투두 생성
 * @routes POST /todos
 * @request @body {content}
 */
router.post("/", contentVaildator, (req, res, next) => {
  const { content } = req.body;
  createTodo(content);
  res.status(200).json({ success: true, message: "생성 완료" });
});

/**
 * @description 투두 수정
 * @routes PUT /todos/:id
 * @request @body {content}
 */
router.put("/:id", contentVaildator && idVaildator, (req, res, next) => {
  const { id } = req.params;
  const { content } = req.body;
  updateTodo(id, content);
  res.status(200).json({ success: true, message: "수정 완료" });
});

/**
 * @description 투두 삭제
 * @routes DELETE /todos/:id
 */
router.delete("/:id", idVaildator, (req, res, next) => {
  const { id } = req.params;
  deleteTodo(id);
  res.status(200).json({ success: true, message: "삭제 완료" });
});

/**
 * @description
 * @routes PATCH /todos/:id
 */

router.patch("/:id", idVaildator, (req, res, next) => {
  const { id } = req.params;
  toggleTodo(id);
  res.status(200).json({ success: true, message: "체크 완료" });
});

/**
 * @description 완료된 투두 리스트 조회
 * @routes GET /todos/complete
 */
router.get("/complete", (req, res, next) => {
  const todos = getTodos(false);
  res.status(200).json({ success: true, todos: todos });
});

//
module.exports = router;
