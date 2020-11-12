const express = require('express');
const app = express();

const history = [];

app.use('/calc', require('./routes/calc.router'));

app.listen(9000, err => {
  if (err) {
    console.error(err.message);
    process.exit(1);
  } else console.log('start');
});
