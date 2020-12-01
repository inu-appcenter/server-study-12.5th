const express = require("express");
const morgan = require("morgan");
const app = express();

// port setting
app.set("port", process.env.PORT || 9000);

// application middleware
app.use(morgan("dev"));
app.use(express.json()); // body's json Parsing
app.use(express.urlencoded({ extended: true })); // x-www-form-urlencoded parsing

// load router
app.use("/todos", require("./routes/todos.router"));

// error handling
// * next(err)
app.use((err, req, res, next) => {
  if (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});
app.use((req, res, next) => {
  res.status(404).json({ success: false, message: "경로를 찾을 수 없습니다." });
});

// port binding
app.listen(app.get("port"), () => {
  console.log("server start");
});
