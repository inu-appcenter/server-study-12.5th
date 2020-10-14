const express = require("express"); //es5
// import express from "express" es6
const app = express();
const history = [];

app.get("/add", (req, res) => {
  const { a, b } = req.query; //쿼리스트링으로 받는값은 {}안에 넣어줌  /add?a=2&b=2
  const Result = Number(a) + Number(b);
  res.send(String(Result)); // /경로로 들어갔을때 이문자열을 응답시키겠다
  console.log(Result);
  const today = Date.now(); //현재시간을 넣어줌
  history.push({ today, Result });
  res.end();
});

app.get("/minus", (req, res) => {
  const { a, b } = req.query;
  const Result = Number(a) - Number(b);
  res.send(String(Result));
  console.log(Result);
  const today = Date.now(); //현재시간을 넣어줌
  history.push({ today, Result });
  res.end();
});

app.get("/multi", (req, res) => {
  const { a, b } = req.query;
  const Result = Number(a) * Number(b);
  res.send(String(Result));
  console.log(Result);
  const today = Date.now(); //현재시간을 넣어줌
  history.push({ today, Result });
  res.end();
});

app.get("/div", (req, res) => {
  const { a, b } = req.query;
  const Result = Number(a) / Number(b);
  res.send(String(Result));
  console.log(Result);
  const today = Date.now(); //현재시간을 넣어줌
  history.push({ today, Result });
  res.end();
});
app.get("/history", (req, res) => {
  res.send(history.sort());
});
//port binding(원하는 포트번호로 묶어 이app에서만 사용가능하게 만들어줌)
app.listen(9000, () => {
  console.log("server start");
}); //포트번호가 성공적으로 실행되면 call back함수인 에로우펑션 작동
