const { todos } = require("../database/todo");
const validator = (req, res, next) => {
  const { id } = req.params;
  //Number.isInteger주어진 값이 정수인지 판별하는 메소드
  if (Number.isInteger(Number(id))) {
    next();
  } else {
    res.send("정수형 타입으로 입력하세요");
  }
};

const validator2 = (req, res, next) => {
  const { content } = req.body;
  if (content != undefined) {
    next();
  } else {
    res.send("내용을 입력하세요");
  }
};

const validator3 = (req, res, next) => {
  if (!todos.length) {
    res.send("배열안에 아무값도 없습니다");
  } else {
    next();
  }
};
module.exports = { validator, validator2, validator3 };

/*
    req.query란
    -url에서 뒤에 입력되는 query문을 req.query로 받아오는 것이다.
    req.params란
    -이미 예약이되어잇는 즉, routing에서 받아올 값을 기다렸다가 바로 가져오는것
    참고 https://wooooooak.github.io/web/2018/11/10/req.params-vs-req.query/
*/
