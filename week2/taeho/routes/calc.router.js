const router = require('express').Router();
const history = [];

const queryValidator = (req, res, next) => {
  const { a, b } = req.query;
  if (a != undefined && b != undefined) next();
  else res.send('제대로 입력하세요');
};

const calcController = op => (req, res) => {
  const { a, b } = req.query;
  let result;
  if (op == '+') result = parseInt(a) + parseInt(b);
  if (op == '-') result = parseInt(a) - parseInt(b);
  if (op == '*') result = parseInt(a) * parseInt(b);
  if (op == '/') result = parseInt(a) / parseInt(b);
  const recode = { date: Date.now(), result };
  history.push(recode);
  res.status(200).json({ result: recode.result });
};

router.get('/add', queryValidator, calcController('+'));
router.get('/minus', queryValidator, calcController('-'));
router.get('/multi', queryValidator, calcController('*'));
router.get('/div', queryValidator, calcController('/'));
router.get('/history', (req, res) => {
  const resultArr = history.slice();
  resultArr.sort((a, b) => b.date - a.date);

  res.status(200).json({
    history: resultArr.map(recode => ({
      ...recode,
      date: new Date(recode.date).toLocaleString(),
    })),
  });
});

module.exports = router;
