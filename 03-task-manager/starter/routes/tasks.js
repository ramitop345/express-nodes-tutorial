const express = require('express')
const Router = express.Router()
const {getAllTasks,getTask,createTask,updateTask,deleteTask} = require('../controllers/tasks')


const log = console.log


Router.route('/').get(getAllTasks).post(createTask)

Router.route('/:id').post(getTask).patch(updateTask).delete(deleteTask)

module.exports = {Router,log}