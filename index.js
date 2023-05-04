// const express = require ('express')
// const app = express()

// app.get('/',(req,res)=>{
//     res.send("This is home page")
// })

// app.get('/about',(req,res)=>{
//     res.send("This is about page")
// })

// app.get('/services',(req,res)=>{
//     res.send("This is services page")
// })

// app.get('/contact',(req,res)=>{
//     res.send("This is contact page")
// })


// app.listen(9090, ()=>{
//    console.log("succesfully")
// })
const express = require("express")
const app = express()
const PORT = 9090
const path = require("path")

const mainpath = path.join(__dirname, "./public")

app.use(express.static(mainpath))
app.get("/",(req,  res)=>{
    res.send("skrrr")
})

app.listen(PORT,()=>{
    console.log("server is running")
})
