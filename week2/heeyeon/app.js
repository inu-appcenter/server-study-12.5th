const express = require("express")
const app = express()

const history = []

app.get('/',(req,res)=>{
    res.json("안뇽")
})

app.get('/add',(req,res)=>{
    const {a,b} = req.query
    const date = new Date().toLocaleString()
    const result = Number(a) + Number(b)

    history.push(date +" / " +`${a}` + " + " + `${b}` + " = " + result)
    res.json({result})
})

app.get('/minus',(req,res)=>{
    const {a,b} = req.query
    const date = new Date().toLocaleString()
    const result = Number(a)-Number(b)
    
    history.push(date +" / " +`${a}` + " - " + `${b}` + " = " + result)
    res.json({result})
})

app.get('/multi',(req,res)=>{
    const {a,b} = req.query
    const date = new Date().toLocaleString()
    const result = Number(a)*Number(b)

    history.push(date +" / " +`${a}` + " * " + `${b}` + " = " + result)
    res.json({result})
})

app.get('/div',(req,res)=>{
    const {a,b} = req.query
    const date = new Date().toLocaleString()
    const result = Number(a)/Number(b)

    history.push(date +" / " +`${a}` + " / " + `${b}` + " = " + result)
    res.json({result})
})

app.get('/history',(req,res)=>{
    res.json(history.sort())
})

app.listen(3001, () => {
    console.log("http://localhost:3001");
  });