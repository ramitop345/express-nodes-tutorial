
const express = require('express')
const app = express()
const {Router,log} = require('./routes/tasks') 
const connectDB = require('./db/connect')
require('dotenv').config()

log('Task Manager App')

app.use(express.json())
app.use('/api/v1/tasks',Router)

app.get('/', (req,res) =>{
    res.send('Home Page')
})


const port = 3000 

const start = async () => {
    try{
    await connectDB(process.env.MONGO_URI)
    log('connected to Mongo Database 03-TASK-MANAGER')
    app.listen(port, log(`listening on port ${port}`))
    }catch(error){
console.log(error)
}
}

start()



