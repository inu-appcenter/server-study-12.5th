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
app.get("/*", (req, res) => {
  res.status(404).json({ success: false, message: "잘못된 접근입니다." });
});

// error handing
// * next(err) 모든 에러 처리가능
app.use((err, req, res, next) => {
  if (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// port binding
app.listen(9000, (err) => {
  if (err) {
    console.error(err.message);
    process.exit();
  } else console.log("server start");
});
