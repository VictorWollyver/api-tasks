import express from 'express'
const tasksRoutes = express.Router()
import TaskController from '../controllers/TaskController'

tasksRoutes.get('/', TaskController.getTasks)

tasksRoutes.post('/post', TaskController.postTask)

tasksRoutes.get('/getById', TaskController.getTasksById)

tasksRoutes.delete('/delete', TaskController.deleteTask)

tasksRoutes.put('/update', TaskController.updateTaskById)

export default tasksRoutes