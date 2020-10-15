const express = require("express");

const app = express();

const arr = [];

app.get("/add", (req, res) => {
    const {
        a,b
    } = req.query;
    const sum = Number(a) + Number(b);

    const date = new Date();

    const object = {
        time: date,
        method: "add",
        a: a,
        b: b,
        result: sum
    }

    arr.push(object);

    res.json({
        result: sum
    });

})

app.get("/minus", (req, res) => {
    const {
        a,b
    } = req.query;
    const minus = Number(a) - Number(b);

    const date = new Date();

    const object = {
        time: date,
        method: "minus",
        a: a,
        b: b,
        result: minus
    }

    arr.push(object);

    res.json({
        result: minus
    })
})

app.get("/multi", (req, res) => {
    const {
        a,b
    } = req.query;
    const multi = Number(a) * Number(b);

    const date = new Date();

    const object = {
        time: date,
        method: "multi",
        a: a,
        b: b,
        result: multi
    }

    arr.push(object);

    res.json({
        result: multi
    });

})

app.get("/div", (req, res) => {
    const {
        a,b
    } = req.query;
    const div = Number(a) / Number(b);

    const date = new Date();

    const object = {
        time: date,
        method: "div",
        a: a,
        b: b,
        result: div
    }

    arr.push(object);

    res.json({
        result: div
    });

})

app.get("/history", (req, res) => {
    // 최신순으로 정렬
    let array = arr.sort(function (a, b) {
        return new Date(b.time) - new Date(a.time);
    });
    res.json({
        history: array
    });
})

app.listen(9000, () => {
    console.log("server start");
});