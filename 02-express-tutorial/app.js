const express = require('express')
const app = express()
const logger = require('./logger')

//req => middleware =>res
// thi is a middleware


//this is another middleware
app.get('/',logger,(req,res) => {
   
    res.send('Home')
})

//another middleware
app.get('/about', (req,res) => {
    res.send('About')
})


app.listen(5000,()=>{
    console.log('Server is listening on port 5000')
})