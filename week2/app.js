const express = require("express"); //es5
// import express from "express" es6
const app = express();

//(req, res) => {} 핸들러,컨트롤러라고 부름
app.use("/calc", require("./routes/calc.router")); //컨트롤+스페이스바 하면 지웠던걸 다시 자동완성시켜줌
// calc.router.js를 실행시키려면 calc경로를 먼저 거쳐야함
//port binding(원하는 포트번호로 묶어 이app에서만 사용가능하게 만들어줌)
app.listen(9000, (err) => {
  if (err) {
    console.error(err.message);
    process.exit(1);
  } else console.log("server start");
}); //포트번호가 성공적으로 실행되면 call back함수인 에로우펑션 작동
