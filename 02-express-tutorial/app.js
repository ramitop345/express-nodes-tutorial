const express = require('express')
const app = express()
const path = require('path')

//used to setup static middleware / make server recognise static files(css, images, ...)
app.use(express.static('./public'))

// app.get('/',(req,res)=>{
// res.sendFile(path.resolve(__dirname,'./navbar-app/index.html'))
// })
//if we add index.html in public we dont need to use the above function anymore. 
//the page is loaded automatically once we launch the server


app.all('*',(req,res)=>{
    res.status(404).send('ressource not found')
})

app.listen(5000, ()=>{
    console.log('Server is listenning on port 5000')
})