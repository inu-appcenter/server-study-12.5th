const express = require('express');
const app = express();

const history = [];

app.get('/add', (req, res) => {
  const { a, b } = req.query;
  const recode = { date: Date.now(), result: parseInt(a) + parseInt(b) };
  history.push(recode);
  res.status(200).json({ result: recode.result });
});
app.get('/minus', (req, res) => {
  const { a, b } = req.query;
  const recode = { date: Date.now(), result: parseInt(a) - parseInt(b) };
  history.push(recode);
  res.status(200).json({ result: recode.result });
});
app.get('/multi', (req, res) => {
  const { a, b } = req.query;
  const recode = { date: Date.now(), result: parseInt(a) * parseInt(b) };
  history.push(recode);
  res.status(200).json({ result: recode.result });
});
app.get('/div', (req, res) => {
  const { a, b } = req.query;
  const recode = { date: Date.now(), result: parseInt(a) / parseInt(b) };
  history.push(recode);
  res.status(200).json({ result: recode.result });
});
app.get('/history', (req, res) => {
  const resultArr = history.splice();
  resultArr.sort((a, b) => b.date - a.date);

  res.status(200).json({
    history: resultArr.map(recode => ({
      ...recode,
      date: new Date(recode.date).toLocaleString(),
    })),
  });
});

app.listen(9000, err => {
  if (err) {
    console.error(err.message);
    process.exit(1);
  } else console.log('start');
});
