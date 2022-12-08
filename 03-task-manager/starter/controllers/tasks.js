

const getAllTasks = (req,res) =>{
    res.send('get Task')
}

const getTask = (req,res) =>{
    res.send('get A single Task')
}

const createTask = (req,res) =>{
    res.send('create Task')
}

const updateTask = (req,res) =>{
    res.send('update Task')
}

const deleteTask = (req,res) =>{
    res.send('delete Task')
}



module.exports = {getAllTasks,getTask,createTask,updateTask,deleteTask}