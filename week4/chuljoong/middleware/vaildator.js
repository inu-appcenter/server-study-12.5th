// validator는 입력되는 값이 알맞게 들어왔는지 확인 시켜주는 함수

const idVaildator = (req, res, next) => {
  const { id } = req.params;
  if (Number.isInteger(Number(id))) return next();
  else res.send("id is not integer");
};

const contentVaildator = (req, res, next) => {
  const { content } = req.body;
  if (content != undefined) return next();
  else res.send("content is undefined");
};

module.exports = {
  idVaildator,
  contentVaildator,
};
