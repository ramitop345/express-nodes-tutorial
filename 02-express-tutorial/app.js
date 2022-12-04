const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    console.log('user hit the ressource')
    res.status(200).send('<h1>Home Page</h1>')
})

app.get('./about',(req,res)=>{
    res.status(200).send('<h1> About Page</h1>')
})


app.get('*',(req,res)=>{
    res.status(404).send('<h1>ressource not found</h1>')
})

app.listen(5000, ()=>{
    console.log('Server is listenning on port 5000')
})