const todoRouter = require("../routes/todos.router");

const contentValidator = (req, res, next) => {
  const { content } = req.body;
  // content가 비었는지 확인
  if (content != "" && content != undefined) next();
  else res.send("내용을 제대로 입력하세요");
};

const idValidator = (req, res, next) => {
  const { id } = req.params;
  // id가 Number가 되는지 확인
  if (Number.isInteger(Number(id))) next();
  else res.send("id값을 정수로 입력하세요.");
};

const idAndContentValidator = (req, res, next) => {
  const { id } = req.params;
  const { content } = req.body;
  // id와 content 둘다 확인
  if (Number.isInteger(Number(id)) && content != "" && content != undefined)
    next();
  else res.send("id값을 정수로 입력하거나 내용을 제대로 입력하세요.");
};

module.exports = {
  contentValidator,
  idValidator,
  idAndContentValidator,
};
