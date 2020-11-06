const router = require("express").Router(); // 라우팅
const history = [];
module.exports = router;

function queryValidator(req, res, next) {
  const { a, b } = req.query;
  if (a != undefined && b != undefined) next();
  else res.send("제대로 입력하세요");
}

const calcController = (op) => (req, res) => {
  let result;
  const { a, b } = req.query;
  if (op == "+") {
    result = parseInt(a) + parseInt(b);
  } else if (op == "-") {
    result = parseInt(a) - parseInt(b);
  } else if (op == "*") {
    result = parseInt(a) * parseInt(b);
  } else if (op == "/") {
    result = parseInt(a) / parseInt(b);
  }
  const recode = { date: Date.now(), result };
  history.push(recode);
  res.status(200).json({ result: recode.result });
};

router.get("/add", queryValidator, calcController("+"));
router.get("/minus", queryValidator, calcController("-"));
router.get("/multi", queryValidator, calcController("*"));
router.get("/div", queryValidator, calcController("/"));

router.get("/history", (req, res) => {
  const resultArr = history.splice();
  resultArr.sort((a, b) => b.date - a.date);

  res.status(200).json({
    history: resultArr.map((recode) => ({
      ...recode,
      date: new Date(recode.date).toLocaleString(),
    })),
  });
});
