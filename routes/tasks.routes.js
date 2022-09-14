const express = require('express')
const tasksRoutes = express.Router()
const TaskController = require('../controllers/TaskController')

tasksRoutes.get('/', TaskController.getTasks)

tasksRoutes.post('/post', TaskController.postTask)        

tasksRoutes.get('/getById', TaskController.getTasksById)

tasksRoutes.post('/delete', TaskController.deleteTask)

tasksRoutes.post('/update', TaskController.updateTaskById)


module.exports = tasksRoutes