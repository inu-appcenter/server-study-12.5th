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
todoRouter.post("/", contentValidator, async (req, res, next) => {
  const { content } = req.body;
  await createTodo(content);
  res.status(201).json({ success: true, message: "todo 생성 성공" });
});

/**
 * @description 투두리스트 모두 조회
 * @routes GET / todos
 */
todoRouter.get("/", async (req, res, next) => {
  const todos = await getTodos();
  res.status(200).json({ success: true, todos: todos });
});

/**
 * @description 투두리스트 수정
 * @routes PUT / todos/:id
 * @Request @body { content }
 */
todoRouter.put("/:id", idAndContentValidator, async (req, res, next) => {
  // todo: validator
  const { id } = req.params;
  const { content } = req.body;
  // const id = req.param.id;
  const hi = await updateTodo(id, content); // 에러가 낫다면 에러 객체 반환, 에러가 안났다면 String 반환
  if (typeof hi != "object") {
    res.status(200).json({ success: true, message: "todo 수정 성공" });
  } else
    res.status(500).json({ success: false, message: "DB에 없는 ID입니다." });
});

/**
 * @description 투두리스트 체크
 * @routes PATCH / todos/:id
 */
todoRouter.patch("/:id", idValidator, async (req, res, next) => {
  const { id } = req.params;
  const hi = await toggleTodo(id); // 에러가 낫다면 에러 객체 반환, 에러가 안났다면 String 반환
  if (typeof hi != "object") {
    res.status(200).json({ success: true, message: "todo 체크 성공" });
  } else
    res.status(500).json({ success: false, message: "DB에 없는 ID입니다." });
});

/**
 * @description 투두 삭제
 * @routes DELETE / todos/:id
 */
todoRouter.delete("/:id", idValidator, async (req, res, next) => {
  const { id } = req.params;
  const hi = await deleteTodo(id); // 에러가 낫다면 에러 객체 반환, 에러가 안났다면 String 반환
  if (typeof hi != "object") {
    // 에러 확인
    res.status(200).json({ success: true, message: "todo 삭제 완료" });
  } else
    res.status(500).json({ success: false, message: "DB에 없는 ID입니다." });
});

/**
 * @description 마감한 투두리스트 조회
 * @routes GET / todos/complete
 */
todoRouter.get("/complete", async (req, res, next) => {
  const todos = await getTodos(false);
  res.status(200).json({ success: true, todos: todos });
});

module.exports = todoRouter; // 이 폴더의 모든곳에서 라우터 사용가능
