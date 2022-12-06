const express = require('express')
const app = express()

//req => middleware =>res
// thi is a middleware
const logger = (req,res,next) => {
    const method = req.method
    const url = req.url
    const time = new Date().toUTCString()
    console.log(method,url,time)
    next()  // this is crutial to pass on to the nex middleware, else you encounter an error on thw website
}

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