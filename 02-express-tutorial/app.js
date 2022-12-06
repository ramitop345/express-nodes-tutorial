const express = require('express')
const app = express()
const logger = require('./logger')
const authorize = require('./authorize')

//req => middleware =>res
// thi is a middleware


//app.use(logger)
app.use([logger,authorize]) //use this tu use api as base(api/home/about/products)

//this is another middleware
app.get('/',(req,res) => {
   
    res.send('Home')
})

//another middleware
app.get('/about', (req,res) => {
    res.send('About')
})

//another middleware
app.get('/api/products', (req,res) => {
    res.send('Products')
})

//another middleware
app.get('/api/items', (req,res) => {
    console.log(req.user)
    res.send('Items')
})

app.listen(5000,()=>{
    console.log('Server is listening on port 5000')
})