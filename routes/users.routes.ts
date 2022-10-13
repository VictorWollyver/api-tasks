import express from 'express'
const userRoutes = express.Router()
import UsersController from '../controllers/UserController'

import { verifyIfNameAlreadyExists, verifyPassword, verifyIfAccountExists, generateToken, verifyIfPasswordIsCorrect, getToken } from '../middlewares/userMiddleware'

userRoutes.post('/create', verifyIfNameAlreadyExists, verifyPassword, generateToken, UsersController.createUser)

userRoutes.post('/login', verifyIfAccountExists, verifyPassword, verifyIfPasswordIsCorrect, generateToken, UsersController.loginUser)

userRoutes.get('/checkuser', getToken, UsersController.checkUser)

export default userRoutes

