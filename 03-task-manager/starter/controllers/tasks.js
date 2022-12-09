

const getAllTasks = (req,res) =>{
    res.send('get all Tasks')
}
//used res.json() to test middleware
const getTask = (req,res) =>{
    res.json({id: req.params.id})
}

const createTask = (req,res) =>{
    res.json(req.body)
}

const updateTask = (req,res) =>{
    res.send('update Task')
}

const deleteTask = (req,res) =>{
    res.send('delete Task')
}



module.exports = {getAllTasks,getTask,createTask,updateTask,deleteTask}