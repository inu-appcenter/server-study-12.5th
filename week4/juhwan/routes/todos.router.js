const {
  createTodo,
  getTodos,
  updateTodo,
  deleteTodo,
  toggleTodo,
} = require("../database/todos");
const {
  contentValidator,
  idValidator,
  idAndContentValidator,
} = require("../middleware/validator");
const todoRouter = require("express").Router();

/**
 * @description 투두리스트 생성
 * @routes POST / todos
 * @Request @body {content}
 */
todoRouter.post("/", contentValidator, (req, res, next) => {
  const { content } = req.body;
  createTodo(content);
  res.status(201).json({ success: true, message: "todo 생성 성공" });
});

/**
 * @description 투두리스트 모두 조회
 * @routes GET / todos
 */
todoRouter.get("/", (req, res, next) => {
  const todos = getTodos();
  res.status(200).json({ success: true, todos: todos });
});

/**
 * @description 투두리스트 수정
 * @routes PUT / todos/:id
 * @Request @body { content }
 */
todoRouter.put("/:id", idAndContentValidator, (req, res, next) => {
  // todo: validator
  const { id } = req.params;
  const { content } = req.body;
  // const id = req.param.id;
  try {
    updateTodo(id, content);
    res.status(200).json({ success: true, message: "todo 수정 성공" });
  } catch (error) {
    res.status(500).json({ success: false, message: "DB에 없는 ID입니다." });
  }
});

/**
 * @description 투두리스트 체크
 * @routes PATCH / todos/:id
 */
todoRouter.patch("/:id", idValidator, (req, res, next) => {
  const { id } = req.params;
  try {
    toggleTodo(id);
    res.status(200).json({ success: true, message: "todo 체크 성공" });
  } catch (error) {
    res.status(500).json({ success: false, message: "DB에 없는 ID입니다." });
  }
});

/**
 * @description 투두 삭제
 * @routes DELETE / todos/:id
 */
todoRouter.delete("/:id", idValidator, (req, res, next) => {
  const { id } = req.params;
  try {
    deleteTodo(id);
    res.status(200).json({ success: true, message: "todo 삭제 완료" });
  } catch (error) {
    res.status(500).json({ success: false, message: "DB에 없는 ID입니다." });
  }
});

/**
 * @description 마감한 투두리스트 조회
 * @routes GET / todos/complete
 */
todoRouter.get("/complete", (req, res, next) => {
  const todos = getTodos(false);
  res.status(200).json({ success: true, todos: todos });
});

module.exports = todoRouter; // 이 폴더의 모든곳에서 라우터 사용가능
