const router = require("express").Router();
const history = [];

//쿼리스트링으로 오는값을 검사해주는 함수
function queryValidator(req, res, next) {
  const { a, b } = req.query;
  if (a != undefined && b != undefined) next();
  //a와 b가 둘다 에러가 없을시 next로 넘어감
  else res.send("제대로 입력하세요");
}
const calcController = (op) => {
  return function calcController(req, res, next) {
    const { a, b } = req.query; //쿼리스트링으로 받는값은 {}안에 넣어줌  /add?a=2&b=2
    //쿼리스티링으로 받는값은 문자열값이여서 정수형으로 변환 ==parrseInt(a)
    let Result; //const로하면 기본값이 없어서 불가능
    if (op == "+") {
      Result = Number(a) + Number(b);
    } else if (op == "-") {
      Result = Number(a) - Number(b);
    } else if (op == "*") {
      Result = Number(a) * Number(b);
    } else if (op == "/") {
      Result = Number(a) / Number(b);
    }
    res.send(String(Result)); // /경로로 들어갔을때 이문자열을 응답시키겠다
    console.log(Result);
    const today = Date.now(); //현재시간을 넣어줌
    history.push({ today, Result });
    res.end();
  };
}; //함수가 함수를 리턴하는 함수

router.get("/add", queryValidator, calcController("+"));

router.get("/minus", queryValidator, calcController("-"));

router.get("/multi", queryValidator, calcController("*"));

router.get("/div", queryValidator, calcController("/"));

router.get("/history", (req, res) => {
  const resarr = history.slice();
  resarr.sort((a, b) => b.today - a.today);
  res.status(200).json(resarr);
  // res.send(history.sort());
});

module.exports = router;
