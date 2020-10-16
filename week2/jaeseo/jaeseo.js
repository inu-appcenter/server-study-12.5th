const express = require("express");
const app = express();

const result = [];

app.get("/add", (req,res)=>{
    const { a, b} = req.query;
    const date1 = new Date();

    date1.toLocaleString();
    const sum = Number(a)+Number(b);
    result.push(date1, sum);
    res.end();
});

app.get("/minus", (req,res)=>{
    const { a, b} = req.query;
    const date1 = new Date();

    date1.toLocaleString();
    const minus = Number(a)-Number(b);
    result.push(date1, minus);
    res.end();
});

app.get("/multi", (req,res)=>{
    const { a, b} = req.query;
    const date1 = new Date();

    date1.toLocaleString();
    const multi = Number(a)*Number(b);
    result.push(date1, multi);
    res.end();
});

app.get("/div", (req,res)=>{
    const { a, b} = req.query;
    const date1 = new Date();

    date1.toLocaleString();
    const div = Number(a)/Number(b);
    result.push(date1, div);
    res.end();
});

app.get("/history", (req,res)=>{
    result.sort();
    res.end();
});

app.listen(9000, () => {
    console.log("server start");
  });
  