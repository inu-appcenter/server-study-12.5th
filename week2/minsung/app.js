const express = require('express');
const app = express();

const result = []

app.get('/add', (req, res) => {
    console.log(req.query);
    const { a, b } = req.query;
    const sol = (Number(a) + Number(b))
    // 현재 날짜 추가
    const date = Date.now()
    result.push({ date, sol })
    res.send(sol.toString());
});

app.get('/minus', (req, res) => {
    console.log(req.query);
    const { a, b } = req.query;
    const sol = (Number(a) - Number(b))
    // 현재 날짜 추가
    const date = Date.now()
    result.push({ date, sol })
    res.send(sol.toString());
});
app.get('/multi', (req, res) => {
    console.log(req.query);
    const { a, b } = req.query;
    const sol = (Number(a) * Number(b))
    // 현재 날짜 추가
    const date = Date.now()
    result.push({ date, sol })
    res.send(sol.toString());
});
app.get('/div', (req, res) => {
    console.log(req.query);
    const { a, b } = req.query;
    const sol = (Number(a) / Number(b))
    // 현재 날짜 추가
    const date = Date.now()
    result.push({ date, sol })
    res.send(sol.toString());
});


app.get('/history', (req, res) => {
    result.sort((a, b) => {
        return a.date - b.date
    })
    res.send(result)
})

app.listen(8000, () => {
    console.log('server start');
});