const express = require('express')
const app = express()
const {Router,log} = require('./routes/tasks') 

log('Task Manager App')

app.use('/api/v1/tasks',Router)
app.use(express.json())

app.get('/', (req,res) =>{
    res.send('Home Page')
})


const port = 3000

app.listen(port, log('listening on port 3000'))