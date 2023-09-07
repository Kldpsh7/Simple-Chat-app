const express = require('express')
const fs=require('fs')
const PATH=require('path')
const bodyParser = require('body-parser')
const app = express()
app.use(express.static(PATH.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended:true}))
app.get('/login',(req,res,next)=>{
    res.sendFile(__dirname+'/views/login.html')
})
app.post('/',(req,res,next)=>{
    async function Post() {
        await new Promise((resolve,reject)=>{
            resolve(fs.appendFileSync(__dirname+'/public/data.html',(`${Object.keys(req.body)[0]} : ${Object.values(req.body)[0]}<br>`),err=>console.log(err)))
        })
        res.redirect('/')
    }
    Post()
})
app.get('/',(req,res,next)=>{
    res.sendFile(__dirname+'/views/mainPage.html')
})


app.listen(4000)