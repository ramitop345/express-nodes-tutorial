const express = require('express')
const app = express()
const logger = require('./logger')

//req => middleware =>res
// thi is a middleware


app.use(logger)

//this is another middleware
app.get('/',(req,res) => {
   
    res.send('Home')
})

//another middleware
app.get('/about', (req,res) => {
    res.send('About')
})

//another middleware
app.get('/products', (req,res) => {
    res.send('Products')
})

//another middleware
app.get('/items', (req,res) => {
    res.send('Items')
})

app.listen(5000,()=>{
    console.log('Server is listening on port 5000')
})