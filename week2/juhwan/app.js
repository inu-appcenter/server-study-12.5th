const express = require("express");
const app = express();

app.use("/calc", require("./routes/calc.router")); // 라우팅

app.listen(9000, () => {
  console.log("server start");
});
