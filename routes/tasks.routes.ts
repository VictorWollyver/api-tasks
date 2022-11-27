
import express from 'express'
const tasksRoutes = express.Router()
import TaskController from '../controllers/TaskController'

import { verifyIfNameAlreadyExists, verifyPassword, verifyIfAccountExists, generateToken, verifyIfPasswordIsCorrect, getToken, checkUser } from '../middlewares/userMiddleware'

tasksRoutes.get('/', getToken, checkUser, TaskController.getTasks)
tasksRoutes.post('/post', getToken, checkUser, TaskController.postTask)
tasksRoutes.delete('/delete/:index', getToken, checkUser, TaskController.deleteTask)
tasksRoutes.put('/update/:index', getToken, checkUser, TaskController.updateTask)


export default tasksRoutes