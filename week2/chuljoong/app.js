const express = require("express")
const app = express()

const history = [];
app.get("/", (req, res) => {
  res.send("사칙연산")
  res.end()
})

app.get("/add", (req, res) => {
  const {
    a,
    b
  } = req.query;
  const date = new Date();
  const add = Number(a) + Number(b);
  const info = {
    date: date,
    operator: "add",
    result: add,
  };
  history.push(info);
  res.send(String(add));
  res.end();
});

app.get("/minus", (req, res) => {
  const {
    a,
    b
  } = req.query;
  const date = new Date();
  const minus = Number(a) - Number(b);
  const info = {
    date: date,
    operator: "minus",
    result: minus,
  };
  history.push(info);
  res.send(String(minus));
  res.end();
});

app.get("/multi", (req, res) => {
  const {
    a,
    b
  } = req.query;
  const date = new Date();
  const multi = Number(a) * Number(b);
  const info = {
    date: date,
    operator: "mul",
    result: multi,
  };
  history.push(info);
  res.send(String(multi)); //안에 있는 문자열을 본문으로 보내줌
  res.end();
});

app.get("/div", (req, res) => {
  const {
    a,
    b
  } = req.query;
  const date = new Date();
  const div = Number(a) / Number(b);
  const info = {
    date: date,
    operator: "div",
    result: div,
  };
  history.push(info);
  res.send(String(div));
  res.end();
});

app.get("/history", (req, res) => {
  history.sort((a, b) => {
    if (a.date > b.date) return -1;
    if (a.date < b.date) return 1;
    return 0;
  });
  console.log(history);
  res.send(history);
});

app.listen(9000, () => {
  console.log("Server Start")
})