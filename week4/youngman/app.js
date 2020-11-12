const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true })); //req.body를 사용하기위한 두줄
app.use("/", require("./routes/start"));
app.use("/todos", require("./routes/todolistRoutes"));
app.use((err, req, res, next) => {
  if (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});
//없는 경로 요청시 404에러발생
app.use((req, res, next) => {
  res.status(404).json({ success: false, message: "err발생" });
});

app.listen(9000, (err) => {
  if (err) {
    console.error(err.message);
    process.exit(1);
  } else console.log("server start!");
});
