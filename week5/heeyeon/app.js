const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const indexRouter = require("./routes/index");
app.use("/", cors(), indexRouter);
const todoRouter = require("./routes/todo");
app.use("/api/todo", cors(), todoRouter);
const doneRouter = require("./routes/isDone");
app.use("/api/isdone", cors(), doneRouter);

app.use((err, req, res, next) => {
    if (err) {
        res.status(500).json({ success: false, message: err.message });
    }
});

app.listen(9001, () => {
    console.log("http://localhost:9001");
});
