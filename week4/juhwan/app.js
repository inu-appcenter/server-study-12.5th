const express = require("express"); // import expresss
const morgan = require("morgan");
// http
const app = express(); // backend application

// application middleware
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // x-www=form-urlencoded parsing

// load router
app.use("/todos", require("./routes/todos.router"));
// app.get("/*", (req, res) => {
// res.status(404).json({ success: false, message: "잘못된 접근입니다." });
// });

// error handing
// * next(err) 모든 에러 처리가능
app.use((err, req, res, next) => {
  if (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// 모든 미들웨어 함수 및 라우터에서 아무것도 응답을 하지 않을 때 여기에 걸림
app.use((req, res, next) => {
  res.status(404).send("Sorry can't find");
});

// port binding
app.listen(9000, (err) => {
  if (err) {
    console.error(err.message);
    process.exit();
  } else console.log("server start");
});
